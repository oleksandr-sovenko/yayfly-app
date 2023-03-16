import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import ctaCartoon from "../../assets/confirm-booking/cta-cartoon.png";
import ctaDiamond from "../../assets/confirm-booking/cta-diamond.png";


const PaymentCta = () => {
    return (
        <Box className="payment-cta">
            <Grid container sx={{ background: "#CD363A", borderRadius: "5px", padding: "18px", fontFamily: "Jaldi", marginBottom: "40px" }}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ marginBottom: "16px", background: "#12172A", display: "flex", alignItems: "center", padding: "6px  15px", borderRadius: "37px", "& p": { color: "#fff", fontFamily: "Jaldi", fontSize: "16px", marginLeft: "6px", fontWeight:600 } }}>
                        <img src={ctaDiamond} alt="" />
                        <Typography>EXCLUSIVE, UNPUBLISHED DEAL DETECTED</Typography>
                    </Box>
                    <Typography sx={{ color: "#fff", fontSize: "20px",fontWeight:600 }}>
                        Our search results detected an unpublished deal for your flight.{" "}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ paddingLeft: { md: "16px", xs: "0" } }}>
                    <Grid container sx={{ placeItems: "center", alignItems: "center" }}>
                        <Grid item xs={9} sm={9} sx={{ textAlign: "center" }}>
                            <Typography sx={{ color: "#fff", fontSize: "16px", marginBottom: "15px",fontWeight:700 }}>Call now{" "}
                                <Typography component="span">to secure the best fare</Typography>{" "}
                            </Typography>
                            <a href="tel:8882112111" style={{ display: "inline-block", background: "#12172a", width: "216px", lineHeight: "42px", height: "42px", fontSize: "22px", color: "#fff", textDecoration: "none", borderRadius: "50px", fontFamily: "Jaldi", fontWeight: 700, boxSizing: "border-box", marginLeft: "10px", transition: "all 0.3s ease 0s" }}>{" "}
                                <Typography sx={{ width: "22px", height: "22px", background: "#fff", marginRight: "10px", display: "inline-flex", alignItems: "center", borderRadius: "50%", justifyContent: "center", "& svg": { color: "#333", fontSize: "14px", } }} component="span">
                                    <FaPhoneAlt />
                                </Typography>
                                <Typography component="span" sx={{fontWeight: 700}}>(888) 211.2111</Typography>
                            </a>
                            <Typography sx={{ fontSize: "14px", color: "#fff", marginTop: "5px",fontWeight:500 }}>
                                24/7 SUPPORT | NO HOLD TIME
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                            <img src={ctaCartoon} alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};


export default PaymentCta;
