import { Box } from "@mui/material";
import React, { Component } from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "../Payment/MobilePaymentCta";
import MobileTimeLine from "../Payment/MobileTimeLine";
import PaymentCta from "../Payment/PaymentCta";
import PaymentTimeLine from "../Payment/PaymentTimeLine";
import PriceDetails from "../Payment/PriceDetails";
import CheckDetails from "./CheckDetails";
import loadingImage from '../../assets/loading.svg';
import { localStorageJSON, getSettings } from '../../functions'
import axios from 'axios';


export default class Confirmation extends Component {
    state = {
        loading: true,
        offer: {},
        passengers: [],
        contactDetails: {},
        additionalBaggage: [],
        seats: {},
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const that = this,
              id = window.location.pathname.replace(/.*\//, '');

        let offer = localStorageJSON('offer'),
            passengers = localStorageJSON('passengers'),
            contactDetails = localStorageJSON('contactDetails'),
            additionalBaggage = localStorageJSON('additionalBaggage'),
            seats = localStorageJSON('seats');

        if (offer.id) {
            that.setState({
                loading: false,
                offer: offer,
                passengers: passengers,
                contactDetails: contactDetails,
                additionalBaggage: additionalBaggage,
                seats: seats
            });
        } else {

        }

        window.scroll({ top: 0, left: 0 });
    }

    componentWillUnmount() {

    }

    render() {
        const that = this,
              settings = getSettings(),
              loading = that.state.loading,
              offer = that.state.offer,
              passengers = that.state.passengers,
              contactDetails = that.state.contactDetails,
              additionalBaggage = that.state.additionalBaggage,
              seats = that.state.seats;

        return (
            <div className="confirmation-pages">
                <Box className="container" sx={{padding:{md:"0 15px", xs:"0px"}}}>
                    <Box sx={{ fontFamily: "'Public Sans', sans-serif", display: { xs: "block", md: "grid" }, gridTemplateColumns: "2fr 1fr", gap: "40px" }}>
                        <Box>
                            <PageTitle title="Confirm your booking" />
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <PaymentTimeLine step={3} />
                            </Box>
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <MobileTimeLine step={3} />
                            </Box>

                            {loading === false ? (
                                <>
                                <SectionTitle title="Your flight Details" />
                                <ConformSearchResult offer={offer} />
                                <Box sx={{ display: { xs: "block", md: "none" }, marginBottom: { xs: "20px", md: "0px" } }}>
                                    <PageTitle title="Price details" />
                                    <PriceDetails
                                        offer={offer}
                                        additionalBaggage={additionalBaggage}
                                        seats={seats}
                                    />
                                </Box>
                                <CheckDetails
                                    offer={offer}
                                    passengers={passengers}
                                    contactDetails={contactDetails}
                                    seats={seats}
                                    onSeatsChanged={(data) => {
                                        that.setState({ seats: data });
                                    }}
                                />
                                </>
                            ) : (
                                <Box sx={{ textAlign: 'center', background: 'white', padding: '20px', marginBottom: '40px', borderRadius: '5px' }}>
                                    <img src={loadingImage} alt="" style={{ animation: 'rotation 2s infinite linear' }} /> Loading ...
                                </Box>
                            )}

                            {settings.unpublished_deal_detected && settings.unpublished_deal_detected.show_on && settings.unpublished_deal_detected.show_on.confirm_booking ? (
                                <Box sx={{ display: { md: "block", xs: "none" } }}>
                                    <PaymentCta phone={settings.phone} />
                                </Box>                            
                            ) : (
                                <></>
                            )}
                        </Box>
                        <Box>
                            <Box sx={{ display: { md: "block", xs: "none" } }}>
                                <PageTitle title="Price details" />
                                {loading === false ? (
                                    <PriceDetails
                                        offer={offer}
                                        additionalBaggage={additionalBaggage}
                                        seats={seats}
                                    />
                                ) : (
                                    <Box sx={{ textAlign: 'center', background: 'white', padding: '20px', marginBottom: '5px', borderRadius: '5px' }}>
                                        <img src={loadingImage} alt="" style={{ animation: 'rotation 2s infinite linear' }} /> Loading ...
                                    </Box>
                                )}
                            </Box>
                            
                            {settings.unpublished_deal_detected && settings.unpublished_deal_detected.show_on && settings.unpublished_deal_detected.show_on.confirm_booking ? (
                                <MobilePaymentCta phone={settings.phone} />
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

