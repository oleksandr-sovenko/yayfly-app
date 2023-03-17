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
import ThankYouModal from "../../components/Modal/ThankYouModal";
import axios from 'axios';


export default class Payment extends Component {
    state = {
        loading: true,
        offer: {}
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const that = this,
              id = window.location.pathname.replace(/.*\//, '');

        axios.get(`https://yayfly.com/api/offer/${id}`).then((response) => {
            that.setState({ loading: false, offer: response.data.data });
        }).catch((error) => {
            console.log(error);
            that.setState({ loading: false });
        });
    }

    componentWillUnmount() {

    }

    render() {
        const that = this,
              offer = that.state.offer;

        return (
            <>
                {/*<ThankYouModal />*/}
                <div className="payment-pages">
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
                                <SectionTitle title="Your flight" />
                                <ConformSearchResult offer={offer} />
                                <Box sx={{ display: { xs: "block", md: "none" } }}>
                                    <PageTitle title="Price details" />
                                    <PriceDetails offer={offer} />
                                </Box>
                                <PaymentCard offer={offer} />
                                <Box sx={{ display: { md: "block", xs: "none" } }}>
                                    <PaymentCta />
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ display: { md: "block", xs: "none" } }}>
                                    <PageTitle title="Price details" />
                                    <PriceDetails offer={offer} />
                                </Box>
                                <MobilePaymentCta />
                            </Box>
                        </Box>
                    </Box>
                </div>
            </>
        );
    }
};
