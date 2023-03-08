import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import centerCartton from "../../assets/confirm-booking/centerCartton.png";
import guaranteImg from "../../assets/confirm-booking/guarnte.png";
import modalCartoon from "../../assets/confirm-booking/modalCartoon.png";

const ThankYouModal = ({ handleThankModalClose }) => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
        fontFamily: "'Jaldi', sans-serif",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className="wlc-modal-content"
      >
        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "#fff",
            fontFamily: "'Jaldi', sans-serif",
            height: "auto",
            padding: "20px",
            borderRadius: "10px",
            padding: { md: "30px 120px", xs: "30px" },
            position: "relative",
            "& .MuiBox-root.css-1pppxor": {
              overflowY: "inherit !important",
            },
          }}
        >
          <Button
            onClick={handleThankModalClose}
            sx={{
              position: "absolute",
              right: { md: "30px", xs: "0px" },
              top: { md: "30px", xd: "10px" },
              color: "#fff",
            }}
          >
            <CloseIcon />
          </Button>
          <Box
            sx={{
              display: { md: "none", xs: "block", textAlign: "center" },
              "& img": {
                marginTop: "-70px",
              },
            }}
          >
            <img src={centerCartton} alt="" srcset="" />
          </Box>
          <Box sx={{ paddingTop: "20px" }}>
            <Typography
              sx={{
                fontSize: { md: "50px", xs: "40px" },
                lineHeight: "118.5%",
                marginBottom: { md: "30px", xs: "20px" },
              }}
            >
              Thank You
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jaldi",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: { xs: "22px", md: "28px" },
                lineHeight: "118.5%",
                marginBottom: "20px",
                "& br": {
                  display: { xs: "none", md: "block" },
                },
              }}
            >
              We are working on detecting a cheaper flight. Please <br /> expect
              a phone cal{" "}
              <Typography
                component="span"
                sx={{
                  fontFamily: "Jaldi",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: { xs: "28px", md: "34px" },
                  lineHeight: "118.5%",
                  marginBottom: "20px",
                  textDecoration: "underline",
                  textDecorationColor: "#CD363A",
                }}
              >
                within the next few minutes.
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              "& .carton-img": {
                margin: "0 auto",
                display: { xs: "none", md: "block" },
              },
            }}
          >
            <img className="carton-img" src={modalCartoon} alt="" srcset="" />
            <Typography
              sx={{
                marginTop: "15px",
                marginBottom: "30px",
                fontSize: "26px",
                display: { xs: "none", md: "block" },
              }}
            >
              Searching for the best <br /> and cheapest fares ...
            </Typography>
            <Box sx={{ marginTop: { xs: "22px", md: "0px" } }}>
              <img src={guaranteImg} alt="" srcset="" />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ThankYouModal;
