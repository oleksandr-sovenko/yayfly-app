import { Box } from "@mui/system";
import React from "react";
import ConformSearchResult from "../../components/ConformSearchResult";
import PaymentCard from "./PaymentCard";

const Payment = () => {
  return (
    <div className="payment-pages">
      <div className="container">
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "745px" },
              flexGrow: 1,
            }}
          >
            <h2>Your flight</h2>
            <ConformSearchResult />
            <PaymentCard />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "280px" }, marginLeft: "40px" }}>
            <h2>Price Details</h2>
            <Box
              sx={{ width: "100%", height: "100px", background: "#000" }}
            ></Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Payment;
