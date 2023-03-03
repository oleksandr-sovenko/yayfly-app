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
            <PaymentCard />
            <PaymentCta />
          </Box>
          <Box>
            <PageTitle title="Price details" />
            <Box>
              <PriceDetails />
              <MobilePaymentCta/>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Payment;
