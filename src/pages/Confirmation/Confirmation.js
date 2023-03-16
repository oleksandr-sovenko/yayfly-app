import { Box } from "@mui/material";
import React from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "../Payment/MobilePaymentCta";
import MobileTimeLine from "../Payment/MobileTimeLine";
import PaymentCta from "../Payment/PaymentCta";
import PaymentTimeLine from "../Payment/PaymentTimeLine";
import PriceDetails from "../Payment/PriceDetails";
import CheckDetails from "./CheckDetails";


const Confirmation = () => {
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
                        <ConformSearchResult />
                        <Box sx={{ display: { xs: "block", md: "none" }, marginBottom: { xs: "20px", md: "0px" } }}>
                            <PageTitle title="Price details" />
                            <PriceDetails />
                        </Box>
                        <CheckDetails />
                        <Box sx={{ display: { md: "block", xs: "none" } }}>
                            <PaymentCta />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: { md: "block", xs: "none" } }}>
                            <PageTitle title="Price details" />
                            <PriceDetails />
                        </Box>
                        <MobilePaymentCta />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};


export default Confirmation;
