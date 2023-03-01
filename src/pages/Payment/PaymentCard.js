import CheckIcon from "@mui/icons-material/Check";
import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import paymentImg from "../../assets/confirm-booking/payment.png";

const CardWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
  borderRadius: "5px",
  padding: "35px",
  marginBottom: "30px",
  color: "rgb(0, 3, 23)",
}));

const CardButton = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  color: "rgb(72, 96, 255)",
  border: "2px solid rgb(72, 96, 255);",
  width: "210px",
  // height: "35px",
  lineHeight: "35px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "5px",
  fontWeight: 700,
  marginTop: "35px",
}));

const PaymentCard = () => {
  return (
    <div>
      <CardWrap>
        <Grid container spacing="16px">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "425px",
                  border: "1px solid #12172A",
                  borderRadius: "4px",
                },
              }}
            >
              <Box>
                <input
                  style={{
                    border: "0px",
                    width: "100%",
                    height: "52px",
                    fontSize: "18px",
                    color: "#888B94",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    borderBottom: "1px solid #12172A",
                    padding: "8px 24px",
                  }}
                  className="payment-input"
                  type="text"
                  placeholder="Cardholder name"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  height: "52px",
                  "& input": {
                    width: "50%",
                    border: "0px",
                  },
                }}
              >
                <input
                  style={{
                    border: "0px",
                    // width: "100%",
                    height: "52px",
                    fontSize: "18px",
                    color: "#888B94",
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    padding: "8px 24px",
                    // border: "1px solid #12172A",
                  }}
                  className="payment-input"
                  type="text"
                  placeholder="4587 5784 8967 8452"
                />
                <img src={paymentImg} alt="" srcset="" />
                {/* <Typography sx={{ width: "50%" }}>
                </Typography> */}
              </Box>
              <Grid container sx={{ borderTop: "1px solid #12172A" }}>
                <Grid item xs={6}>
                  <input
                    style={{
                      border: "0px",
                      width: "100%",
                      height: "52px",
                      fontSize: "18px",
                      color: "#888B94",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      padding: "8px 24px",
                      borderRight: "1px solid #12172A",
                      borderTopRightRadius: "0px",
                    }}
                    className="payment-input"
                    type="text"
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid item xs={6}>
                  <input
                    style={{
                      border: "0px",
                      width: "100%",
                      height: "52px",
                      fontSize: "18px",
                      color: "#888B94",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                      padding: "8px 24px",
                      // border: "1px solid #12172A",
                    }}
                    className="payment-input"
                    type="text"
                    placeholder="777"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "25px 1fr",
                  marginBottom: "5px",
                  marginTop: { xs: "20px", md: "0px" },
                }}
              >
                <CheckIcon
                  sx={{
                    color: "#000",
                    fontSize: "14px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                <Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
                  SSL secure transaction
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "25px 1fr",
                  marginBottom: "5px",
                }}
              >
                <CheckIcon
                  sx={{
                    color: "#000",
                    fontSize: "14px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
                <Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
                  Pay securely using your debit or credit card
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "30px 1fr",
                  marginBottom: "5px",
                  "& svg": {
                    color: "#000",
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight: 700,
                    marginTop: "auto",
                    marginBottom: "auto",
                    height: "30px",
                    width: "30px",
                  },
                }}
              >
                <CheckIcon sx={{}} />
                <Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
                  Receive booking confirmation within 12 hours
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardWrap>
    </div>
  );
};

export default PaymentCard;
