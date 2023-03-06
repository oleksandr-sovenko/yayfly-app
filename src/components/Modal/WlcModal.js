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
// function WlcModal() {
const WlcModal = () => {
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
      }}
    >
      <Dialog open={open} onClose={handleClose} fullWidth={fullWidth}
        maxWidth={maxWidth} sx={{
          "& .css-cyxlny-MuiPaper-root-MuiDialog-paper": {
            backgroundColor:"#1A2E4A !important"
          }
        }}>
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
            padding: { md: "60px 140px", xs: "30px" },
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
                fontSize: { xs: "28px", md: "34px" },
                lineHeight: "118.5%",
                marginBottom: "20px",
                "& br": {
                  display: { xs: "none", md: "block" },
                },
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
                  fontSize: { xs: "28px", md: "34px" },
                  lineHeight: "118.5%",
                  marginBottom: "20px",
                  textDecoration: "underline",
                  textDecorationColor: "#CD363A",
                }}
              >
                Within The Next 3 to 14 minutes.
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jaldi",
                fontSize: { md: "28px", xs: "24px" },
                lineHeight: "103.5%",
              }}
            >
              Please fill in your phone number and of our support <br /> agent
              will call you back with your flight deal.
            </Typography>
          </Box>

          <Grid
            container
            sx={{
              marginTop: "50px",
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
                  marginBottom: { sm: "50px", xs: "30px" },
                  maxWidth: "420px",
                  width: "100%",
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
                    height: { sm: "62px", xs: "54px" },
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
                  sx={{
                    marginTop: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: { sm: "62px", xs: "54px" },
                    boxShadow: "none",
                    background: "#CD363A",
                    textAlign: "center",
                    lineHeight: { sm: "62px", xs: "54px" },
                    textDecoration: "none",
                    color: "#fff",
                    borderRadius: "5px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    fontSize: "22px",
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
                      margin: "12px 0",
                      fontSize: { md: "18px", xs: "15px" },
                    }}
                  >
                    We will only call you about your flight{" "}
                  </Typography>
                  <Typography sx={{ fontSize: { md: "14px", xs: "12px" } }}>
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
                  xs={12}
                  sm={6}
                  sx={{ textAlign: { xs: "center", sm: "start" } }}
                >
                  <Typography sx={{ fontSize: { md: "22px", xd: "18px" } }}>
                    or call us now{" "}
                  </Typography>
                  <Typography sx={{ fontSize: { md: "14px", xs: "12px" } }}>
                    24/7 SUPPORT | NO HOLD TIME
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    textAlign: { xs: "center", sm: "end" },
                    marginTop: { xs: "10px", sm: "0px" },
                  }}
                >
                  <a
                    href="tel:8882112111"
                    className="wlc-modal-btn"
                    style={{
                      display: "inline-block",
                      background: "#CD363A",
                      width: "200px",
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
              <Box sx={{ marginTop: { xs: "22px", md: "0px" } }}>
                <img src={guaranteImg} alt="" srcset="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </Box>
  );
};

export default WlcModal;
