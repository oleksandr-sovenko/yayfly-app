import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CtaCard from "../../components/CtaCard";
import WlcModal from "../../components/Modal/WlcModal";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopSeachForm from "../../components/TopSeachForm";
import loadingImage from '../../assets/loading.svg';
import loadingImageInvert from '../../assets/loading-2.svg';
import { getParams, getMinutes, convert2Time } from '../../functions';
import axios from 'axios';


// https://yayfly.com/search/round-trip/GDO,ASD,2023-03-13,2023-03-13/economy/1/0/0?luggage=true&layover=true
// https://yayfly.com/search/one-way/GDO,ASD,2023-03-13/economy/1/0/0?luggage=true&layover=true
// https://yayfly.com/search/multi-city/GDO,ASD,2023-03-13;ASD,GDO,2023-03-14/economy/1/0/0?luggage=true&layover=true


export default class Search extends Component {
    state = {
        params: {},
        progress: 0,
        loading: true,
        offers: {
            recomended: [],
            cheapest: [],
            shortest: [],            
        },
        filtered: {
            current: 'recomended',
            recomended: [],
            cheapest: [],
            shortest: [],
        },
        airlines: [],
        multicity: {
            selected: 0,
            list: [
                { departure: 'TLL', arrival: 'WAW', date: 'Tue Apr 11' },
                { departure: 'WAW', arrival: 'KBP', date: 'Tue Apr 12' },
                { departure: 'KBP', arrival: 'LAX', date: 'Tue Apr 13' },
            ]
        },
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const that   = this,
              params = getParams();

        that.setState({ params: params });

        that.timer = setInterval(() => {
            if (that.state.progress < 95)
                that.setState({ progress: that.state.progress + 1 });
            else
                that.setState({ progress: 95 });
        }, 1000);

        let data = {
            type: params.type,
            from: 'WAW', 
            to: 'TLL',
            depart: '2023-03-25',
            return: '2023-03-30',
        };

        axios.post('https://yayfly.com/api/offers', data).then((response) => {
            let offers = response.data.data.offers,
                tempAirlines = {},
                airlines = {};

            let recomended = [],
                cheapest = [],
                shortest = [];

            for (const offer of offers) {
                if (params.type === 'round-trip') {
                    const nos = offer.slices.map((s) => s.segments.length );

                    if (nos[0] == 1 && nos[1] == 1)
                        offer.stops = 'direct';
                    else if (nos[0] <= 2 || nos[1] <= 2)
                        offer.stops = '1stop';
                    else
                        offer.stops = '2+stops';

                    offer.departTime = {
                        outbound: parseInt(offer.slices[0].segments[0].departing_at.replace(/.*T/, '')),
                        return: parseInt(offer.slices[1].segments[0].departing_at.replace(/.*T/, '')),
                    };

                    offer.journeyDur = {
                        outbound: parseInt(offer.slices[0].duration.replace(/.*T/, '')),
                        return: parseInt(offer.slices[1].duration.replace(/.*T/, '')),
                    };
                }

                // carrier logos
                offer.carriers = {};
                for (const slice of offer.slices) {
                    for (const segment of slice.segments) {
                        offer.carriers[segment.marketing_carrier.name] = segment.marketing_carrier.logo_symbol_url;
                    }
                }

                recomended.push(offer);
                cheapest.push(offer);
                shortest.push(offer);

                for (const slice of offer.slices) {
                    for (const segment of slice.segments) {
                        airlines[segment.marketing_carrier.id] = segment.marketing_carrier.name;
                    }
                }
            }

            recomended.sort((a, b) => {
                const totalA1 = parseFloat(a.total_amount),
                      totalB1 = parseFloat(b.total_amount);

                const totalA2 = a.slices.map((i) => getMinutes(i.duration)).reduce((sum, a) => sum + a, 0),
                      totalB2 = b.slices.map((i) => getMinutes(i.duration)).reduce((sum, b) => sum + b, 0);                      

                if ((totalA1 < totalB1) && (totalA2 < totalB2))
                    return -1;
                else if ((totalA1 > totalB1) && (totalA2 > totalB2))
                    return 1;
                else
                    return 0;
            });            

            cheapest.sort((a, b) => {
                const totalA = parseFloat(a.total_amount),
                      totalB = parseFloat(b.total_amount);

                if (totalA < totalB)
                    return -1;
                else if (totalA > totalB)
                    return 1;
                else
                    return 0;
            });

            shortest.sort((a, b) => {
                const totalA = a.slices.map((i) => getMinutes(i.duration)).reduce((sum, a) => sum + a, 0),
                      totalB = b.slices.map((i) => getMinutes(i.duration)).reduce((sum, b) => sum + b, 0);

                if (totalA < totalB)
                    return -1;
                else if (totalA > totalB)
                    return 1;
                else
                    return 0;
            });

            clearInterval(that.timer);

            that.setState({
                progress: 100,
                loading: false, 
                offers: {
                    recomended,
                    cheapest,
                    shortest
                },
                filtered: {
                    current: 'recomended',
                    recomended,
                    cheapest,
                    shortest
                },
                airlines: airlines
            });
        }).catch((error) => {
            console.log(error);

            clearInterval(that.timer);

            that.setState({ progress: 100, loading: false });
        });

        // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const that      = this,
              params    = that.state.params,
              progress  = that.state.progress,
              loading   = that.state.loading,
              offers    = that.state.offers,
              filtered  = that.state.filtered,
              airlines  = that.state.airlines,
              multicity = that.state.multicity;

        const filter = (params) => {
            let _filtered = {
                current: filtered.current,
                recomended: [],
                cheapest: [],
                shortest: [],
            };

            for (const name of Object.keys(_filtered)) {
                if (name === 'current')
                    continue;

                for (const offer of offers[name]) {
                    if (params.airlines) {
                        if (params.airlines[offer.owner.id] === false)
                            continue;
                    }

                    if (params.stops) {                    
                        if (params.stops['direct'] === false) {
                            if (offer.stops === 'direct')
                                continue;
                        }

                        if (params.stops['1stop'] === false) {
                            if (offer.stops === '1stop')
                                continue;
                        }

                        if (params.stops['2+stop'] === false) {
                            if (offer.stops === '2+stop')
                                continue;
                        }
                    }

                    if (params.departTime) {
                        if (params.departTime.outbound) {
                            if (offer.departTime.outbound < params.departTime.outbound[0] ||
                                offer.departTime.outbound > params.departTime.outbound[1]
                            )
                                continue;
                        }

                        if (params.departTime.return) {
                            if (offer.departTime.return < params.departTime.return[0] ||
                                offer.departTime.return > params.departTime.return[1]
                            )
                                continue;
                        }
                    }                    

                    if (params.journeyDur) {
                        if (params.journeyDur.outbound) {
                            if (offer.journeyDur.outbound > params.journeyDur.outbound)
                                continue;
                        }

                        if (params.journeyDur.return) {
                            if (offer.journeyDur.return > params.journeyDur.return)
                                continue;
                        }
                    }

                    _filtered[name].push(offer);
                }
            }

            return _filtered;
        }

        const clickMultiCity = (index) => {
            that.setState({ multicity: { selected: index, list: multicity.list } });
        }

        return (
            <>
                {/*<WlcModal></WlcModal>*/}
                <Box
                    sx={{
                        display: { md: "none", sm: "none", xs: "flex" },
                        background: "white",
                        borderBottom: "2px solid rgb(204, 206, 219)",
                        padding: "30px 15px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "25px",
                    }}
                >
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px", "& svg": { marginLeft: "10px", marginRight: "10px" } }}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    lineHeight: "normal",
                                    fontWeight: "700",
                                    color: "rgb(0, 3, 23)",
                                    fontFamily: "'Public Sans', sans-serif",
                                }}
                            >London</Typography>
                            <BsArrowRight></BsArrowRight>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    lineHeight: "normal",
                                    fontWeight: "700",
                                    color: "rgb(0, 3, 23)",
                                    fontFamily: "'Public Sans', sans-serif",
                                }}
                            >Bangkok</Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: "rgba(7, 14, 57, 0.5)",
                                fontFamily: "'Public Sans', sans-serif",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "16px",
                                marginBottom: "4px",
                            }}
                        >Fri May 5 - Fri May 19</Typography>
                        <Typography
                            component={"span"}
                            className="nrPassengers"
                            sx={{
                                color: "rgba(7, 14, 57, 0.5)",
                                fontFamily: "'Public Sans', sans-serif",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "16px",
                            }}
                        >1 adult, Economy</Typography>
                    </Box>
                    <Typography
                        sx={{
                            display: "inline-block",
                            "& a": {
                                textDecoration: "none",
                                color: "#12172a",
                            },
                            "& a svg": {
                                fontSize: "24px",
                                display: "block",
                                marginBottom: "5px",
                            },
                        }}
                    >
                        <Link>
                            <FaPencilAlt></FaPencilAlt>Edit
                        </Link>
                    </Typography>
                </Box>

                {params.type === 'multi-city' ? (
                    <Box className="container multi-city">
                        {multicity.list.map((item, index) => {
                            return (
                                <div key={index} className={index === multicity.selected ? 'multi-city-item active' : 'multi-city-item'} onClick={() => { clickMultiCity(index) }}>
                                    {loading === true ? (
                                        <>
                                            {index === multicity.selected ? (
                                                <img src={loadingImageInvert} style={{ animation: 'rotation 2s infinite linear', float: 'right' }} />
                                            ) : (
                                                <img src={loadingImage} style={{ animation: 'rotation 2s infinite linear', float: 'right' }} />
                                            )}
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                    <div className="departure">{item.departure}</div>
                                    <div className="dots">....</div>
                                    <div className="arrival">{item.arrival}</div>
                                    <div className="date">{item.date}</div>
                                </div>
                            )
                        })}
                    </Box>
                ) : (
                    <></>
                )}

                <TopSeachForm type={params.type} origin={'TLL'} destination={'WAW'} depart={'2020-03-01'} return={'2020-03-03'}></TopSeachForm>
                <Box className="container">
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
                        <Box
                            sx={{
                                gridColumn: { md: "span 3", xs: "span 12" },
                                paddingRight: { md: "30px", xs: "0px" },
                                display: { md: "block", xs: "none" },
                            }}
                        >
                            <Sidebar airlines={airlines} onChanged={(params) => {                                
                                that.setState({ filtered: filter(params) });
                            }}/>
                        </Box>
                        <Box sx={{ gridColumn: { md: "span 9", xs: "span 12" } }}>
                            <CtaCard></CtaCard>
                            <ProgressBar value={progress}></ProgressBar>
                            <SearchPriceResults
                                loading={loading}
                                offers={filtered[filtered.current]}
                                offersExists={offers[filtered.current].length ? true : false}
                                recomended={{
                                    price: `$${filtered['recomended'][0] ? filtered['recomended'][0].total_amount : '0'}`,
                                    duration: filtered['recomended'][0] ? convert2Time(filtered['recomended'][0].slices.map((i) => getMinutes(i.duration)).reduce((sum, a) => sum + a, 0)) : ''
                                }}
                                cheapest={{
                                    price: `$${filtered['cheapest'][0] ? filtered['cheapest'][0].total_amount : '0'}`,
                                    duration: filtered['cheapest'][0] ? convert2Time(filtered['cheapest'][0].slices.map((i) => getMinutes(i.duration)).reduce((sum, a) => sum + a, 0)) : ''
                                }}
                                shortest={{
                                    price: `$${filtered['shortest'][0] ? filtered['shortest'][0].total_amount : '0'}`,
                                    duration: filtered['shortest'][0] ? convert2Time(filtered['shortest'][0].slices.map((i) => getMinutes(i.duration)).reduce((sum, a) => sum + a, 0)) : ''
                                }}
                                changed={(current) => {
                                    let _filtered = filtered;
                                    _filtered.current = current;
                                    that.setState({ filtered: _filtered });
                                }}
                            ></SearchPriceResults>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
};

