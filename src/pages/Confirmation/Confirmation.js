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
import axios from 'axios';


export default class Confirmation extends Component {
    state = {
        passengers: {},
        loading: true,
        offer: {}
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const that = this,
              id = window.location.pathname.replace(/.*\//, '');

        let passengers = {};

        try {
            passengers = JSON.parse(localStorage['passengers']);
        } catch(e) {

        }

        axios.get(`https://yayfly.com/api/offer/${id}`).then((response) => {
            that.setState({ loading: false, offer: response.data.data, passengers: passengers });
        }).catch((error) => {
            console.log(error);
            that.setState({ loading: false });
        });
    }

    componentWillUnmount() {

    }

    render() {
        const that = this,
              offer = that.state.offer,
              passengers = that.state.passengers;

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
                            <SectionTitle title="Your flight Details" />
                            <ConformSearchResult offer={offer} />
                            <Box sx={{ display: { xs: "block", md: "none" }, marginBottom: { xs: "20px", md: "0px" } }}>
                                <PageTitle title="Price details" />
                                <PriceDetails offer={offer} />
                            </Box>
                            <CheckDetails passengers={passengers} />
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
        );
    }
};

