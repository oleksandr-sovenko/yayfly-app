import { Box } from "@mui/material";
import React from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "./MobilePaymentCta";
import MobileTimeLine from "./MobileTimeLine";
import PaymentCard from "./PaymentCard";
import PaymentCta from "./PaymentCta";
import PaymentTimeLine from "./PaymentTimeLine";
import PriceDetails from "./PriceDetails";

const Payment = () => {
  return (
    <div className="payment-pages">
      <Box className="container" sx={{padding:{md:"0 15px", xs:"0px"}}}>
        <Box
          sx={{
            fontFamily: "'Public Sans', sans-serif",
            display: { xs: "block", md: "grid" },
            gridTemplateColumns: "2fr 1fr",
            gap: "40px",
          }}
        >
          <Box>
            <PageTitle title="Confirm Your Booking" />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <PaymentTimeLine />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <MobileTimeLine />
            </Box>
            <SectionTitle title="Your flight" />
            <ConformSearchResult />
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <PageTitle title="Price details" />
              <PriceDetails />
            </Box>
            <PaymentCard />
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

export default Payment;
