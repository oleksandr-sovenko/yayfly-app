import { Box, Typography } from "@mui/material";
import React from "react";

const PriceDetails = () => {
  return (
    <Box
      sx={{
        padding: "22px 26px",
        borderRadius: "5px",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
        "& p": {
          fontSize: "14px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <Typography>1x Passenger</Typography>
        <Typography>$ 193.64</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <Typography>1x Cabin bg</Typography>
        <Typography>Free</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <Typography>Cabin Class</Typography>
        <Typography>Economy</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "15px",
          "& p": {
            fontWeight: 700,
            // fontSize: "14px",
          },
        }}
      >
        <Typography>Total (GBP)</Typography>
        <Typography>$ 193.64</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "15px",
          borderTop: "1px solid rgb(225, 227, 238)",
          "& p": {
            fontWeight: 700,
          },
        }}
      >
        <Typography>Total</Typography>
        <Typography>193.64</Typography>
      </Box>
    </Box>
  );
};

export default PriceDetails;
