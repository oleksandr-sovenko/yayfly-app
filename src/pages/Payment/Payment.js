import { Box } from "@mui/material";
import React from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "./MobilePaymentCta";
import PaymentCard from "./PaymentCard";
import PaymentCta from "./PaymentCta";
import PaymentTimeLine from "./PaymentTimeLine";
import PriceDetails from "./PriceDetails";

const Payment = () => {
  return (
    <div className="payment-pages">
      <div className="container">
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
            <PaymentTimeLine sx={{ display: { xs: "none", md: "block" } }} />
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
      </div>
    </div>
  );
};

export default Payment;
