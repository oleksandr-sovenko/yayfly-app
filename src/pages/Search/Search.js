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
import { getParams } from '../../functions';
import axios from 'axios';


// https://yayfly.com/search/round-trip/GDO,ASD,2023-03-13,2023-03-13/economy/1/0/0?luggage=true&layover=true
// https://yayfly.com/search/one-way/GDO,ASD,2023-03-13/economy/1/0/0?luggage=true&layover=true
// https://yayfly.com/search/multi-city/GDO,ASD,2023-03-13;ASD,GDO,2023-03-14/economy/1/0/0?luggage=true&layover=true


export default class Search extends Component {
    state = {
        params: {},
        progress: 0,
        loading: true,
        offers: [],
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

            for (const offer of offers) {
                for (const slice of offer.slices) {
                    for (const segment of slice.segments) {
                        airlines[segment.marketing_carrier.id] = segment.marketing_carrier.name;
                    }
                }
            }

            clearInterval(that.timer);

            that.setState({ progress: 100, loading: false, offers: offers, airlines: airlines });
        }).catch((error) => {
            clearInterval(that.timer);

            that.setState({ progress: 100, loading: false });
        });;        
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
              airlines  = that.state.airlines,
              multicity = that.state.multicity;

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
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                                "& svg": {
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                },
                            }}
                        >
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

                <TopSeachForm type={params.type}></TopSeachForm>
                <Box className="container">
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
                        <Box
                            sx={{
                                gridColumn: { md: "span 3", xs: "span 12" },
                                paddingRight: { md: "30px", xs: "0px" },
                                display: { md: "block", xs: "none" },
                            }}
                        >
                            <Sidebar airlines={airlines}/>
                        </Box>
                        <Box sx={{ gridColumn: { md: "span 9", xs: "span 12" } }}>
                            <CtaCard></CtaCard>
                            <ProgressBar value={progress}></ProgressBar>
                            <SearchPriceResults loading={loading} offers={offers}></SearchPriceResults>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
};

