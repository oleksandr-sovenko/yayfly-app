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

        let offer = {},
            passengers = [],
            contactDetails = {},
            additionalBaggage = [],
            seats = {};

        try {
            offer = JSON.parse(localStorage['offer']);
        } catch(e) {

        }

        try {
            passengers = JSON.parse(localStorage['passengers']);
        } catch(e) {

        }

        try {
            contactDetails = JSON.parse(localStorage['contactDetails']);
        } catch(e) {

        }

        try {
            additionalBaggage = JSON.parse(localStorage['additionalBaggage']);
        } catch(e) {
            console.log(e);
        }

        try {
            seats = JSON.parse(localStorage['seats']);
        } catch(e) {
            console.log(e);
        }

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
            // axios.get(`https://yayfly.com/api/offer/${id}`).then((response) => {
            //     that.setState({
            //         loading: false,
            //         offer: response.data.data,
            //         passengers: passengers,
            //         contactDetails: contactDetails,
            //         additionalBaggage: additionalBaggage
            //     });
            // }).catch((error) => {
            //     console.log(error);
            //     that.setState({ loading: false });
            // });
        }

        window.scroll({ top: 0, left: 0 });
    }

    componentWillUnmount() {

    }

    render() {
        const that = this,
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

                            <Box sx={{ display: { md: "block", xs: "none" } }}>
                                <PaymentCta />
                            </Box>
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
                            <MobilePaymentCta />
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
};

