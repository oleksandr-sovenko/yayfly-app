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
import { getParams, getMinutes, convertISO8601toHours, convert2Time } from '../../functions';
import axios from 'axios';
import moment from 'moment';

// http://localhost:3000/search/round-trip/WAW,TLL,2023-03-26,2023-03-28/economy/1/0/0

export default class Search extends Component {
    state = {
        params: {},
        progress: 0,
        loading: true,
        offers: { recomended: [], cheapest: [], shortest: [] },
        filtered: { current: 'recomended', recomended: [], cheapest: [], shortest: [] },
        airlines: [],
        offersLimit: 5,
    };


    /**
     * 
     */
    constructor(props) {
        super(props);

        const that = this;

        that.handleScroll = (e) => {
            if (that.state.loading === true)
                return;

            const html = document.querySelector('html'),
                  diff = html.scrollTop + window.innerHeight,
                  fotterHeight = document.querySelector('footer').clientHeight;

            if (diff > (html.offsetHeight - fotterHeight))
                that.setState({ offersLimit: that.state.offersLimit + 5 });
        }
    }


    /**
     * 
     */
    getOffers(index) {
        const that = this,
              params = that.state.params;

        that.setState({ progress: 0, loading: true });

        that.timer = setInterval(() => {
            if (that.state.progress < 95)
                that.setState({ progress: that.state.progress + 1 });
            else
                that.setState({ progress: 95 });
        }, 1000);

        let data = {};

        if (params.type === 'round-trip') {
            data = {
                type: params.type,
                class: params.cabinClass,
                origin: params.trips[index].origin, 
                destination: params.trips[index].destination,
                depart: params.trips[index].dates[0],
                return: params.trips[index].dates[1],
                passengers: {
                    adult: params.adults,
                    child: params.children,
                    infant_without_seat: params.infants,
                }
            };
        } else if (params.type === 'one-way' || params.type === 'multi-city') {
            data = {
                type: 'one-way',
                class: params.cabinClass,
                origin: params.trips[index].origin, 
                destination: params.trips[index].destination,
                depart: params.trips[index].date,
                passengers: {
                    adult: params.adults,
                    child: params.children,
                    infant_without_seat: params.infants,
                }
            };
        }

        axios.post(`${window.flights_engine.url}api/offers`, data).then((response) => {
            let offers = response.data.data.offers,
                airlines = {};

            let recomended = [],
                cheapest = [],
                shortest = [];

            for (const offer of offers) {
                const nos = offer.slices.map((s) => s.segments.length );

                if (nos[0] === 1 && nos[1] === 1)
                    offer.stops = 'direct';
                else if (nos[0] <= 2 || nos[1] <= 2)
                    offer.stops = '1stop';
                else
                    offer.stops = '2+stops';

                if (params.type === 'round-trip') {
                    try {
                        offer.departTime = {
                            outbound: parseInt(offer.slices[0].segments[0].departing_at.replace(/.*T/, '')),
                            return: parseInt(offer.slices[1].segments[0].departing_at.replace(/.*T/, '')),
                        };                           
                    } catch(e) {
                        offer.departTime = { outbound: 0, return: 0 };
                    }

                    try {
                        offer.journeyDur = {
                            outbound: Math.round(convertISO8601toHours(offer.slices[0].duration)),
                            return: Math.round(convertISO8601toHours(offer.slices[1].duration)),
                        };
                    } catch(e) {
                        offer.journeyDur = { outbound: 0, return: 0 };
                    }
                } else {
                    try {
                        offer.departTime = {
                            outbound: parseInt(offer.slices[0].segments[0].departing_at.replace(/.*T/, '')),
                            return: 0,
                        };                           
                    } catch(e) {
                        offer.departTime = { outbound: 0, return: 0 };
                    }

                    try {
                        offer.journeyDur = {
                            outbound: Math.round(convertISO8601toHours(offer.slices[0].duration)),
                            return: 0,
                        };
                    } catch(e) {
                        offer.journeyDur = { outbound: 0, return: 0 };
                    }
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
                offers: { recomended, cheapest, shortest },
                filtered: { current: 'recomended', recomended, cheapest, shortest },
                airlines: airlines
            });
        }).catch((error) => {
            clearInterval(that.timer);

            that.setState({ progress: 100, loading: false });
        });
    }


    /**
     * 
     */
    componentDidMount() {
        const that   = this,
              params = getParams();

        that.setState({ params: params }, (e) => {
            that.getOffers(params.index);            
        });  

        setTimeout(() => {
            window.yayflyInputs.update();
        }, 50);

        window.addEventListener('scroll', that.handleScroll);
    }


    /**
     * 
     */
    componentWillUnmount() {
        const that = this;

        clearInterval(that.timer);

        window.removeEventListener('scroll', that.handleScroll);
    }


    /**
     * 
     */
    render() {
        const that = this,
              params = that.state.params,
              progress = that.state.progress,
              loading = that.state.loading,
              offers = that.state.offers,
              filtered = that.state.filtered,
              airlines = that.state.airlines,
              offersLimit = that.state.offersLimit;

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
                        if (params.departTime.outbound !== undefined) {
                            if (offer.departTime.outbound < params.departTime.outbound[0] ||
                                offer.departTime.outbound > params.departTime.outbound[1]
                            )
                                continue;
                        }

                        if (params.departTime.return !== undefined) {
                            if (offer.departTime.return < params.departTime.return[0] ||
                                offer.departTime.return > params.departTime.return[1]
                            )
                                continue;
                        }
                    }

                    if (params.journeyDur) {
                        if (params.journeyDur.outbound !== undefined) {
                            if (offer.journeyDur.outbound > params.journeyDur.outbound)
                                continue;
                        }

                        if (params.journeyDur.return !== undefined) {
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
            if (loading === true)
                return;

            let _params = params;
            _params.index = index;
            that.setState({ params: _params });

            document.querySelector('[name="origin"]').value = params.trips[index].origin;
            document.querySelector('[name="destination"]').value = params.trips[index].destination;
            document.querySelector('[name="depart"]').value = moment(params.trips[index].date).format('MM/DD/YYYY');

            that.getOffers(index);
        }

        return (
            <>
                {/*<WlcModal></WlcModal>*/}

                <Box sx={{ display: { md: "none", sm: "none", xs: "flex" }, background: "white", borderBottom: "2px solid rgb(204, 206, 219)", padding: "30px 15px", alignItems: "center", justifyContent: "space-between", marginBottom: "25px" }}>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px", "& svg": { marginLeft: "10px", marginRight: "10px" } }}>
                            <Typography sx={{ fontSize: "16px", lineHeight: "normal", fontWeight: "700", color: "rgb(0, 3, 23)", fontFamily: "'Public Sans', sans-serif" }}>{params.trips ? params.trips[params.index].origin : ''}</Typography>
                            <BsArrowRight></BsArrowRight>
                            <Typography sx={{ fontSize: "16px", lineHeight: "normal", fontWeight: "700", color: "rgb(0, 3, 23)", fontFamily: "'Public Sans', sans-serif" }}>{params.trips ? params.trips[params.index].destination : ''}</Typography>
                        </Box>
                        <Typography sx={{ color: "rgba(7, 14, 57, 0.5)", fontFamily: "'Public Sans', sans-serif", fontWeight: "400", fontSize: "14px", lineHeight: "16px", marginBottom: "4px" }}
                        >
                            {params.type === 'round-trip' ? (
                                <>
                                    {params.trips ? `${moment(params.trips[params.index].dates[0]).format('MM/DD/YYYY')} - ${moment(params.trips[params.index].dates[1]).format('MM/DD/YYYY')}` : ''}
                                </>
                            ) : (<></>)}

                            {(params.type === 'one-way' || params.type === 'multi-city') ? (
                                <>
                                    {params.trips ? `${moment(params.trips[params.index].date).format('MM/DD/YYYY')}` : ''}
                                </>
                            ) : (<></>)}
                        </Typography>
                        <Typography component={"span"} className="nrPassengers" sx={{ color: "rgba(7, 14, 57, 0.5)", fontFamily: "'Public Sans', sans-serif", fontWeight: "400", fontSize: "14px", lineHeight: "16px" }}
                        >{window.yayflyInputs ? window.yayflyInputs.updateTravelers(true) : ''}</Typography>
                    </Box>
                    <Typography sx={{ display: "inline-block", "& a": { textDecoration: "none", color: "#12172a" }, "& a svg": { fontSize: "24px", display: "block", marginBottom: "5px" } }}>
                        <Link to='#' onClick={(e) => {
                            e.preventDefault();

                            const topSearch = document.querySelector('.top-search');

                            if (!topSearch.classList.contains('visible'))
                                topSearch.classList.add('visible');
                            else
                                topSearch.classList.remove('visible');
                        }}>
                            <FaPencilAlt /> Edit
                        </Link>
                    </Typography>
                </Box>

                {(params.type === 'multi-city' && params.trips.length > 1) ? (
                    <Box className="container multi-city">
                        {params.trips.map((item, index) => {
                            return (
                                <div key={index} className={index === params.index ? 'multi-city-item active' : 'multi-city-item'} onClick={() => { clickMultiCity(index) }}>
                                    {loading === true ? (
                                        <>
                                            {index === params.index ? (
                                                <img src={loadingImageInvert} alt="" style={{ animation: 'rotation 2s infinite linear', float: 'right' }} />
                                            ) : (
                                                <>
                                                    {/* <img src={loadingImage} alt="" style={{ animation: 'rotation 2s infinite linear', float: 'right' }} /> */}
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                    <div className="origin">{item.origin}</div>
                                    <div className="dots">....</div>
                                    <div className="destination">{item.destination}</div>
                                    <div className="date">{moment(item.date).format('MM/DD/YYYY')}</div>
                                </div>
                            )
                        })}
                    </Box>
                ) : (
                    <Box className="container multi-city"></Box>
                )}

                {params.type === 'round-trip' ? (
                    <TopSeachForm
                        type={params.type}
                        origin={params.trips[params.index].origin}
                        destination={params.trips[params.index].destination}
                        depart={params.trips[params.index].dates[0]}
                        return={params.trips[params.index].dates[1]}
                    ></TopSeachForm>
                ) : (<></>)}

                {(params.type === 'one-way' || params.type === 'multi-city') ? (
                    <TopSeachForm
                        type={params.type}
                        origin={params.trips[params.index].origin}
                        destination={params.trips[params.index].destination}
                        depart={params.trips[params.index].date}
                    ></TopSeachForm>
                ) : (<></>)}

                <Box className="container">
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
                        <Box
                            sx={{
                                gridColumn: { md: "span 3", xs: "span 12" },
                                paddingRight: { md: "30px", xs: "0px" },
                                display: { md: "block", xs: "none" },
                            }}
                            className="sidebar-wrapper"
                        >
                            <Sidebar type={params.type} airlines={airlines} onChanged={(params) => {
                                that.setState({ filtered: filter(params), offersLimit: 5 });
                            }}/>

                            <div className="done-wrapper">
                                <button onClick={() => {
                                    document.querySelector('.sidebar-wrapper').classList.remove('open');
                                    document.querySelector('body').classList.remove('disable-scroll');
                                }}>Done</button>
                            </div>
                        </Box>
                        <Box sx={{ gridColumn: { md: "span 9", xs: "span 12" } }}>
                            <CtaCard></CtaCard>
                            <ProgressBar value={progress}></ProgressBar>
                            <SearchPriceResults
                                loading={loading}
                                offers={filtered[filtered.current]}
                                offersExists={offers[filtered.current].length ? true : false}
                                offersLimit={offersLimit}
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
                                onChanged={(current) => {
                                    let _filtered = filtered;
                                    _filtered.current = current;
                                    that.setState({ filtered: _filtered, offersLimit: 5 });
                                }}
                                onClickedShowFilters={() => {
                                    document.querySelector('.sidebar-wrapper').classList.add('open');
                                    document.querySelector('body').classList.add('disable-scroll');
                                }}
                            ></SearchPriceResults>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
};

