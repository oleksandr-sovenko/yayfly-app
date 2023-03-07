import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import guaranteImg from "../../assets/confirm-booking/guarnte.png";
import modalCartoon from "../../assets/confirm-booking/modalCartoon.png";
import ThankYouModal from "./ThankYouModal";
// function WlcModal() {
const WlcModal = () => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  // Thank you modal
  const [openThankModal, setThankModalOpen] = useState(false);
  const handleClickThankModal = () => {
    setThankModalOpen(true);
  };
  const handleThankModalClose = () => {
    setThankModalOpen(false);
  };

  const handleCloseOpen = () => {
    handleClose();
    handleClickThankModal();
  };

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
        fontFamily: "'Jaldi', sans-serif !important",
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
            borderRadius: "10px",
            padding: { md: "60px 140px", xs: "25px" },
            position: "relative",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: { md: "30px", xs: "0px" },
              top: { md: "30px", xd: "10px" },
              color: "#fff",
            }}
          >
            <CloseIcon />
          </Button>
          <Box>
            <Typography
              sx={{
                fontFamily: "Jaldi",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: { xs: "22px", md: "34px" },
                lineHeight: "118.5%",
                marginBottom: "20px",
                "& br": {
                  display: { xs: "none", md: "block" },
                },
                paddingRight: "10px",
              }}
            >
              Based On Our Flight Search Robot AI, We Expect This <br /> Flight
              To Be Cheaper{" "}
              <Typography
                component="span"
                sx={{
                  fontFamily: "Jaldi",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: { xs: "20px", md: "34px" },
                  lineHeight: "118.5%",
                  marginBottom: "20px",
                  textDecoration: "underline",
                  textDecorationColor: "#CD363A",
                  "& br": {
                    display: { xs: "none", md: "block" },
                  },
                }}
              >
                Within The Next 3 to 14 minutes.
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jaldi",
                fontSize: { md: "28px", xs: "20px" },
                lineHeight: "103.5%",
                "& br": {
                  display: "none",
                },
              }}
            >
              Please fill in your phone number and of our support <br /> agent
              will call you back with your flight deal.
            </Typography>
          </Box>

          <Grid
            container
            sx={{
              marginTop: { md: "50px", xs: "30px" },
              // placeItems: "center",
              // alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  background: "#092142",
                  border: "1px solid #FFFFFF",
                  borderRadius: "5px",
                  padding: { sm: "40px 38px 30px", xs: "20px" },
                  marginBottom: { sm: "25px", xs: "8px" },
                  maxWidth: "420px",
                  width: "100%",
                  "& input": {
                    height: { md: "62px", xs: "52px" },
                    lineHeight: { md: "62px", xs: "52px" },
                  },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#fff",
                    marginBottom: "4px",
                    fontSize: "22px",
                    marginLeft: "6px",
                  }}
                >
                  Phone number
                </InputLabel>
                <input
                  className=""
                  style={{
                    width: "100%",
                    // height: { sm: "62px", xs: "54px" },
                    // lineHeight: { sm: "62px", xs: "54px" },
                    fontFamily: "Jaldi",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    padding: "8px 30px",
                    color: "rgba(9, 33, 66, 0.5)",
                    borderRadius: "5px",
                  }}
                  type="number"
                  placeholder="Phone number"
                />

                <Button
                  onClick={handleCloseOpen}
                  sx={{
                    marginTop: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: { sm: "62px", xs: "52px" },
                    lineHeight: { sm: "62px", xs: "52px" },
                    boxShadow: "none",
                    background: "#CD363A",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#fff",
                    borderRadius: "5px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    fontSize: { md: "22px", xs: "16px" },
                    "&:hover": {
                      background: "#12172A",
                    },
                  }}
                >
                  NOTIFY ME <BsBell style={{ marginLeft: "8px" }} />
                </Button>

                <Box
                  sx={{
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <Typography
                    sx={{
                      margin: { md: "12px 0", xs: "10px 0 3px" },

                      fontSize: { md: "18px", xs: "14px" },
                    }}
                  >
                    We will only call you about your flight{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "14px", xs: "12px" },
                      "& br": {
                        display: { xs: "none", md: "block" },
                      },
                    }}
                  >
                    By submitting this form, you’re providing us with <br />{" "}
                    consent to call you back.
                  </Typography>
                </Box>
              </Box>
              <Grid
                container
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "420px",
                  width: "100%",
                }}
              >
                <Grid
                  item
                  xs={6}
                  sm={6}
                  sx={{ textAlign: { xs: "start", sm: "start" } }}
                >
                  <Typography sx={{ fontSize: { md: "22px", xd: "18px" } }}>
                    or call us now{" "}
                  </Typography>
                  <Typography sx={{ fontSize: { md: "14px", xs: "9px" } }}>
                    24/7 SUPPORT | NO HOLD TIME
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  sx={{
                    textAlign: { xs: "center", sm: "end" },
                    marginTop: { xs: "10px", sm: "0px" },
                    "& a": {
                      width: { md: "200px", xs: "100%" },
                    },
                  }}
                >
                  <a
                    href="tel:8882112111"
                    className="wlc-modal-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#CD363A",
                      // width: "200px",
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
                          color: "#CD363A",
                          fontSize: "14px",
                        },
                      }}
                      component="span"
                    >
                      <FaPhoneAlt />
                    </Typography>
                    <Typography component="span">(888) 211.2111</Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
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
                  marginBottom: "45px",
                  fontSize: "26px",
                  display: { xs: "none", md: "block" },
                }}
              >
                Searching for the best <br /> and cheapest fares ...
              </Typography>
              <Box sx={{ marginTop: { xs: "15px", md: "0px" } }}>
                <img src={guaranteImg} alt="" srcset="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>

      {/* Thank you modal */}
      <Dialog
        open={openThankModal}
        onClose={handleThankModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ThankYouModal
          handleThankModalClose={handleThankModalClose}
          handleClose={handleClose}
        />
      </Dialog>
    </Box>
  );
};

export default WlcModal;
