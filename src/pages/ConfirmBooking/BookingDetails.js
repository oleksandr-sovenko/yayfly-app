import { Box } from "@mui/material";
import React from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PageTitle from "../../components/SectionTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MobilePaymentCta from "../Payment/MobilePaymentCta";
import PaymentCta from "../Payment/PaymentCta";
import PaymentTimeLine from "../Payment/PaymentTimeLine";
import PriceDetails from "../Payment/PriceDetails";
import PassengerCard from "./PassengerCard";
import PersonApplyCard from "./PersonApplyCard";

const BookingDetails = () => {
  return (
    <div className="booking-pages">
      <div className="container">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="80px"
          sx={{
            fontFamily: "'Public Sans', sans-serif",
            // display: { xs: "block", md: "grid" },
            // gridTemplateColumns: "2fr 1fr",
            // gap: "40px",
          }}
        >
          <Box
            sx={{
              gridColumn: { md: "span 8", xs: "span 12" },
            }}
          >
            <PageTitle title="Confirm your booking" />
            <PaymentTimeLine />
            <SectionTitle title="Your flight details" />
            <ConformSearchResult />

            <Box
              sx={{
                display: { xs: "block", md: "none" },
                paddingBottom: "10px",
              }}
            >
              <PageTitle title="Price details" />
              <PriceDetails />
              <MobilePaymentCta />
            </Box>

            <PassengerCard />
            <PersonApplyCard />
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <PaymentCta />
            </Box>
          </Box>
          <Box
            sx={{
              gridColumn: { md: "span 4", xs: "span 12" },
            }}
          >
            {/* <PageTitle title="Price details" />
            <Box>
              <PriceDetails />
              <MobilePaymentCta />
            </Box> */}

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

export default BookingDetails;
