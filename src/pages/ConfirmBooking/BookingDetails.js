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
import PassengerCard from "./PassengerCard";
import PersonApplyCard from "./PersonApplyCard";
import { SeatSelection, AdditionalBaggageSelection } from '@duffel/components'
import '@duffel/components/dist/SeatSelection.min.css'
import loadingImage from '../../assets/loading.svg';
import axios from 'axios';


export default class BookingDetails extends Component {
    state = {
        loading: true,
        passengers: [],
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
            that.setState({ loading: false });
        });

        window.scroll({ top: 0, left: 0 });
    }

    componentWillUnmount() {

    }

    render() {
        const that = this,
              loading = that.state.loading,
              passengers = that.state.passengers,
              offer = that.state.offer;

        // console.log(offer);

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
                                    <SectionTitle title="Your flight details" />
                                    <ConformSearchResult offer={offer} />
                                    <Box sx={{ display: { xs: "block", md: "none" }, paddingBottom: "10px" }}>
                                        <PageTitle title="Price details" />
                                        <PriceDetails offer={offer} />
                                        <MobilePaymentCta />
                                    </Box>
                                    <PassengerCard offer={offer} passengers={passengers} />
                                    <PersonApplyCard />

                                    {/*<AdditionalBaggageSelection
                                        offer={offer}
                                        passengers={[{ id: offer.passengers[0].id, name: ''}]}
                                        initialBaggageSelection={[]}
                                        onSubmit={(e) => { }}
                                    />*/}

                                    <SeatSelection
                                        offer={offer}
                                        seatMaps={offer.seatmaps.data}
                                        passengers={[{ id: offer.passengers[0].id, name: ''}]}
                                        initialBaggageSelection={[]}
                                        onSubmit={(e) => { }}
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
                                    <PriceDetails offer={offer} />
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

