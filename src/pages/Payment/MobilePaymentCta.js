import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import ctaCartoon from "../../assets/confirm-booking/cta-cartoon.png";
import ctaDiamond from "../../assets/confirm-booking/cta-diamond.png";
const MobilePaymentCta = () => {
  return (
    <div>
      <Box className="mobile-payment-cta">
        <Box
          sx={{
            background: "#CD363A",
            borderRadius: "5px",
            border: "1px solid #12172A",
            padding: "26px 14px 22px",
            fontFamily: "Jaldi",
            marginBottom: "20px",
            marginTop: { md: "6px", xs: "0px" },
          }}
        >
          <Box
            sx={{
              marginBottom: "20px",
              background: "#12172A",
              display: "flex",
              alignItems: "center",
              padding: "6px  18px",
              borderRadius: "37px",
              textAlign: "center",
              justifyContent: "center",
              "& p": {
                color: "#fff",
                fontFamily: "Jaldi",
                fontSize: "11px",
                marginLeft: "10px",
              },
            }}
          >
            <img src={ctaDiamond} alt="" srcset="" />
            <Typography>EXCLUSIVE, UNPUBLISHED DEAL DETECTED</Typography>
          </Box>
          <Grid
            container
            sx={{
              placeItems: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={8} sm={8}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Jaldi",
                  fontSize: "16px",
                  marginRight: "12px",
                }}
              >
                Our search results detected an unpublished deal for your flight.
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} sx={{ textAlign: "end" }}>
              <img src={ctaCartoon} alt="" srcset="" />
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", marginRight: "20px" }}>
            <Typography
              sx={{ color: "#fff", fontSize: "18px", marginBottom: "7px" }}
            >
              Call now 3
              <Typography component="span">to secure the best fare</Typography>{" "}
            </Typography>
            <a
              href="tel:8882112111"
              style={{
                display: "inline-block",
                background: "#12172a",
                width: "216px",
                lineHeight: "42px",
                height: "42px",
                fontSize: "22px",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "50px",
                fontFamily: "Jaldi",
                fontWeight: 700,
                boxSizing: "border-box",
                textAlign: "center",
                transition: "all 0.3s ease 0s",
              }}
            >
              {" "}
              <Typography
                sx={{
                  width: "22px",
                  height: "22px",
                  background: "#fff",
                  marginRight: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "50%",
                  justifyContent: "center",

                  "& svg": {
                    color: "#333",
                    fontSize: "14px",
                  },
                }}
                component="span"
              >
                <FaPhoneAlt />
              </Typography>
              <Typography component="span">(888) 211.2111</Typography>
            </a>
            <Typography
              sx={{ fontSize: "14px", color: "#fff", marginTop: "5px" }}
            >
              24/7 SUPPORT | NO HOLD TIME
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MobilePaymentCta;
