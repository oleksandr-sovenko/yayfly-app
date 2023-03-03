import { Box } from "@mui/material";
import React from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "../Payment/MobilePaymentCta";
import PaymentCta from "../Payment/PaymentCta";
import PaymentTimeLine from "../Payment/PaymentTimeLine";
import PriceDetails from "../Payment/PriceDetails";
import CheckDetails from "./CheckDetails";

const Confirmation = () => {
  return (
    <div className="confirmation-pages">
      <div className="container">
        <Box
          sx={{
            display: { xs: "block", md: "grid" },
            gridTemplateColumns: "2fr 1fr",
            gap: "40px",
          }}
        >
          <Box>
            <PageTitle title="Confirm your booking" />
            <PaymentTimeLine />
            <SectionTitle title="Your flight" />
            <ConformSearchResult />
            <CheckDetails />
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

export default Confirmation;
