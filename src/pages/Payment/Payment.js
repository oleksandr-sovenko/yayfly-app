import { Box } from "@mui/material";
import React, { Component } from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "./MobilePaymentCta";
import MobileTimeLine from "./MobileTimeLine";
import PaymentCard from "./PaymentCard";
import PaymentCta from "./PaymentCta";
import PaymentTimeLine from "./PaymentTimeLine";
import PriceDetails from "./PriceDetails";
import { Link } from "react-router-dom";
import loadingImage from '../../assets/loading.svg';
import axios from 'axios';


export default class Payment extends Component {
    state = {
        loading: true,
        offer: {},
        passengers: [],
        contactDetails: {},
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const that = this,
              id = window.location.pathname.replace(/.*\//, '');

        let passengers = {},
            contactDetails = {};

        try {
            passengers = JSON.parse(localStorage['passengers']);
        } catch(e) {

        }

        try {
            contactDetails = JSON.parse(localStorage['contactDetails']);
        } catch(e) {

        }

        axios.get(`https://yayfly.com/api/offer/${id}`).then((response) => {
            that.setState({ loading: false, offer: response.data, passengers: passengers, contactDetails: contactDetails });
        }).catch((error) => {
            console.log(error);
            that.setState({ loading: false });
        });

        window.scroll({ top: 0, left: 0 });
    }

    componentWillUnmount() {

    }

    render() {
        const that = this,
              loading = that.state.loading,
              offer = that.state.offer,
              passengers = that.state.passengers,
              contactDetails = that.state.contactDetails;

        return (
            <>
                <div className="payment-pages">
                    {offer.errors ? (
                        <Box className="container" sx={{ marginTop: '60px' }}>
                            <div className="no-offers">
                                {offer.errors.map((error, index) => {
                                    return (
                                        <p key={index}>{error.message}</p>
                                    )
                                })}
                                
                                <Link>Go to home page</Link>
                            </div>
                        </Box>
                    ) : (
                        <Box className="container" sx={{padding:{md:"0 15px", xs:"0px"}}}>
                            <Box sx={{ fontFamily: "'Public Sans', sans-serif", display: { xs: "block", md: "grid" }, gridTemplateColumns: "2fr 1fr", gap: "40px" }}>
                                <Box>
                                    <PageTitle title="Confirm Your Booking" />
                                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                                        <PaymentTimeLine step={4} />
                                    </Box>
                                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                                        <MobileTimeLine step={4} />
                                    </Box>

                                    {loading === false ? (
                                        <>
                                            <SectionTitle title="Your flight" />

                                            <ConformSearchResult offer={offer.data} />
                                            
                                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                                <PageTitle title="Price details" />
                                                <PriceDetails offer={offer.data} />
                                            </Box>
                                            <PaymentCard offer={offer.data} passengers={passengers} contactDetails={contactDetails} />
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
                                            <PriceDetails offer={offer.data} />
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
                    )}
                </div>
            </>
        );
    }
};
