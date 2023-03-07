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
            fontFamily: "'Jaldi', sans-serif",
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
                fontSize: "12px",
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
            <Grid item xs={7} sm={7}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "'Jaldi', sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  marginRight: "12px",
                }}
              >
                Our search results detected an unpublished deal for your flight.
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              sm={5}
              sx={{
                textAlign: "end",
              }}
            >
              <img src={ctaCartoon} alt="" srcset="" />
            </Grid>
          </Grid>
          <Box
            sx={
              {
                // textAlign: "center",
                // marginRight: "20px",
              }
            }
          >
            <Typography
              sx={{ color: "#fff", fontSize: "18px", marginBottom: "7px" }}
            >
              Call now
              <Typography component="span">
                to secure the best fare
              </Typography>{" "}
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
              sx={{
                fontSize: "13px",
                color: "#fff",
                marginTop: "5px",
                marginLeft: "15px",
              }}
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
