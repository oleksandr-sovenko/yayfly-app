import { Box, Button, Dialog, Typography } from "@mui/material";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "../Payment/MobilePaymentCta";
import MobileTimeLine from "../Payment/MobileTimeLine";
import PaymentCta from "../Payment/PaymentCta";
import PaymentTimeLine from "../Payment/PaymentTimeLine";
import PriceDetails from "../Payment/PriceDetails";
import PassengerCard from "./PassengerCard";
import PersonApplyCard from "./PersonApplyCard";
import CloseIcon from "@mui/icons-material/Close";
import centerCartton from "../../assets/confirm-booking/centerCartton.png";
import guaranteImg from "../../assets/confirm-booking/guarnte.png";
import modalCartoon from "../../assets/confirm-booking/modalCartoon.png";
import '@duffel/components/dist/SeatSelection.min.css'
import loadingImage from '../../assets/loading.svg';
import { localStorageJSON, getSettings } from '../../functions'
import axios from 'axios';


export default class BookingDetails extends Component {
    state = {
        loading: true,
        offer: {},
        passengers: [],
        contactDetails: {},
        additionalBaggage: {}
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const that = this,
              id = window.location.pathname.replace(/.*\//, '');

        let passengers = localStorageJSON('passengers'),
            contactDetails = localStorageJSON('contactDetails');            

        axios.get(`${window.flights_engine.url}api/offer/${id}`).then((response) => {
            that.setState({
                loading: false,
                offer: response.data,
                passengers: passengers,
                contactDetails: contactDetails
            });
        }).catch((error) => {
            that.setState({ loading: false });
        });

        window.scroll({ top: 0, left: 0 });
    }

    componentWillUnmount() {

    }

    render() {
        const that = this,
              settings = getSettings(),
              loading = that.state.loading,
              passengers = that.state.passengers,
              contactDetails = that.state.contactDetails,
              additionalBaggage = that.state.additionalBaggage,
              offer = that.state.offer;

        return (
            <div className="booking-pages">
                <Box className="container" sx={{padding:{md:"0 15px", xs:"0px"}}}>
                    <Box sx={{ fontFamily: "'Public Sans', sans-serif", display: { xs: "block", md: "grid" }, gridTemplateColumns: "2fr 1fr", gap: "40px" }}>
                        <Box>
                            <PageTitle title="Confirm your booking" />
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <PaymentTimeLine step={2} />
                            </Box>
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <MobileTimeLine step={2} />
                            </Box>

                            {loading === false ? (
                                <>
                                    {offer.errors ? (
                                        <Box sx={{ textAlign: 'center', background: 'white', padding: '20px', marginBottom: '40px', borderRadius: '5px' }}>
                                            {offer.errors.map((error, index) => {
                                                return (
                                                    <p key={index}>{error.message}</p>
                                                )
                                            })}
                                                
                                            <Link>Go to home page</Link>
                                        </Box>
                                    ) : (
                                        <>
                                            <SectionTitle title="Your flight details" />
                                            <ConformSearchResult offer={offer.data} />
                                            <Box sx={{ display: { xs: "block", md: "none" }, paddingBottom: "10px" }}>
                                                <PageTitle title="Price details" />
                                                <PriceDetails offer={offer.data} />
                                                <MobilePaymentCta />
                                            </Box>
                                            <PassengerCard
                                                offer={offer.data}
                                                passengers={passengers}
                                                additionalBaggage={additionalBaggage}
                                                onClickedBaggage={(id, data) => {
                                                    let _additionalBaggage = additionalBaggage;

                                                    if (data)
                                                        _additionalBaggage[id] = data;
                                                    else
                                                        delete _additionalBaggage[id];

                                                    that.setState({
                                                        additionalBaggage: _additionalBaggage
                                                    });
                                                }}
                                            />
                                            <PersonApplyCard
                                                offer={offer.data}
                                                contactDetails={contactDetails}
                                                additionalBaggage={additionalBaggage}
                                            />
                                        </>
                                    )}
                                </>
                            ) : (
                                <Box sx={{ textAlign: 'center', background: 'white', padding: '20px', marginBottom: '40px', borderRadius: '5px' }}>
                                    <img src={loadingImage} alt="" style={{ animation: 'rotation 2s infinite linear' }} /> Loading ...
                                </Box>                                
                            )}

                            {settings.unpublished_deal_detected && settings.unpublished_deal_detected.show_on && settings.unpublished_deal_detected.show_on.details_booking ? (
                                <Box sx={{ display: { md: "block", xs: "none" } }}>
                                    <PaymentCta phone={settings.unpublished_deal_detected.phone} />
                                </Box>                            
                            ) : (
                                <></>
                            )}
                        </Box>
                        <Box>
                            <Box sx={{ display: { md: "block", xs: "none" } }}>
                                <PageTitle title="Price details" />
                                {loading === false ? (
                                    <>
                                        {offer.errors ? (
                                            <Box sx={{ textAlign: 'center', background: 'white', padding: '20px', marginBottom: '5px', borderRadius: '5px' }}>
                                                {offer.errors.map((error, index) => {
                                                    return (
                                                        <p key={index}>{error.message}</p>
                                                    )
                                                })}
                                            </Box>
                                        ) : (
                                            <PriceDetails
                                                offer={offer.data}
                                                additionalBaggage={additionalBaggage}
                                            />
                                        )}
                                    </>
                                ) : (
                                    <Box sx={{ textAlign: 'center', background: 'white', padding: '20px', marginBottom: '5px', borderRadius: '5px' }}>
                                        <img src={loadingImage} alt="" style={{ animation: 'rotation 2s infinite linear' }} /> Loading ...
                                    </Box>
                                )}
                            </Box>

                            {settings.unpublished_deal_detected && settings.unpublished_deal_detected.show_on && settings.unpublished_deal_detected.show_on.details_booking ? (
                                <MobilePaymentCta phone={settings.unpublished_deal_detected.phone} />
                            ) : (
                                <></>
                            )}
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
};

