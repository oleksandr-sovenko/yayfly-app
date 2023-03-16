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
              padding: "6px  15px",
              borderRadius: "37px",
              textAlign: "center",
              justifyContent: "center",
              position:{
                md:"static",
                xs:"relative"
              },
              "& p": {
                color: "#fff",
                fontFamily: "Jaldi",
                fontSize: {md:"15px", xs:"15px"},
                fontWeight: 600,
                marginLeft: {md:"10px", xs:"36px"},
              },
            }}
          >
            <Typography 
            component="span"
            sx={{
              position:{md:"inherit", xs:"absolute"},
              left:"0px",
              top:"50%",
              borderRadius:"50%",
              height:{md:"inherit", xs:"50px"},
              width:{md:"inherit", xs:"50px"},
              backgroundColor:{md:"transparent", xs:"#12172A"},
              marginTop:{md:"initial", xs:"-25px"},
              lineHeight:{md:"inherit", xs:"55px"}
            }}
            >
              <img src={ctaDiamond} alt="" />
            </Typography>
            <Typography>EXCLUSIVE, UNPUBLISHED DEAL DETECTED</Typography>
          </Box>
          <Grid
            container
            sx={{
              placeItems: "center",
              alignItems: {md:"center", xs:"flex-start"},
            }}
          >
            <Grid item xs={8} sm={7}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "'Jaldi', sans-serif",
                  fontSize: {md:"18px",xs:"17px"},
                  fontWeight: 600,
                }}
              >
                Our search results detected an unpublished deal for your flight.
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={5}
              sx={{
                textAlign: "end",
                "& img":{
                  height:{md:"", xs:"88px"},
                }
              }}
            >
              <img src={ctaCartoon} alt="" />
            </Grid>
          </Grid>
          <Box
            sx={
              {
                // textAlign: "center",
                 marginTop: {md:"0px", xs:"-20px"},
                 "& a":{
                  borderRadius: {md:"50px", xs:"0px"},
                 }
              }
            }
          >
            <Typography
              sx={{ color: "#fff", fontSize: {md:"16px", xs:"17px"}, marginBottom: "7px", fontWeight: 600, }}
            >
              Call now&nbsp; 
              <Typography component="span" sx={{fontSize: {md:"16px", xs:"17px"}}}>
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
              <Typography component="span" sx={{fontWeight: 700, fontSize: "18px",}}>(888) 211.2111</Typography>
            </a>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fff",
                marginTop: "5px",
                textAlign: "center",
                fontWeight: 600,
                fontFamily: "'Jaldi', sans-serif",
                width: {md:"100%", xs:"216px"},
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
