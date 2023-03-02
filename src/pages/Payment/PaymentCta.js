import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const PaymentCta = () => {
  return (
    <Box className="payment-cta">
      <Grid container sx={{ borderTop: "1px solid #12172A" }}>
        <Grid item xs={12} sm={6}>
          <Typography>EXCLUSIVE, UNPUBLISHED DEAL DETECTED</Typography>
          <Typography>
            Our search results detected an unpublished deal for your flight.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>EXCLUSIVE, UNPUBLISHED DEAL DETECTED</Typography>
          <Typography>
            Our search results detected an unpublished deal for your flight.{" "}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentCta;
