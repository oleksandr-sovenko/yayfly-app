import CheckIcon from "@mui/icons-material/Check";
import { Box, Grid, styled, Typography } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { Link } from "react-router-dom";
import paymentImg from "../../assets/confirm-booking/payment.png";
const CardWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
  borderRadius: "5px",

  marginBottom: "30px",
  color: "rgb(0, 3, 23)",
}));

const PaymentCard = () => {
  return (
    <div>
      <CardWrap sx={{
        //  padding: { md: "40px 20px", xs: "40px 10px" } 
         }}>
        <Box display="grid" gridTemplateColumns="repeat(13, 1fr)" gap={2}>
          <Box
            sx={{
              gridColumn: { md: "span 8", xs: "span 13" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                border: "1px solid #12172A",
                borderRadius: "4px",
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
                  justifyContent: "space-between",
                  height: "52px",
                  "& input": {
                    width: "50%",
                    border: "0px",
                  },
                  "& img": {
                    width: "170px",
                    textAlign: "end",
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
                      padding: "8px 24px",
                      borderRight: "1px solid #12172A",
                      borderTopRightRadius: "0px",
                      borderBottomLeftRadius: "4px",
                    }}
                    className="payment-input"
                    type="text"
                    // type="date"
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
          </Box>
          <Box
            sx={{
              gridColumn: { md: "span 5", xs: "span 13" },
              background:"#E1F6F1",
              padding: { md: "40px 20px", xs: "40px 10px" } 
            }}
          >
            <Box
              sx={{
                width: "100%",
                marginTop: { xs: "25px", sm: "0px" },
              }}
            >
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

                    height: "30px",
                    width: "30px",
                    display: "inline-block",
                  },
                }}
              >
                <CheckIcon />
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "25px",
                    marginLeft: "10px",
                  }}
                >
                  SSL secure transaction
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

                    height: "30px",
                    width: "30px",
                    display: "inline-block",
                  },
                }}
              >
                <CheckIcon />
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "25px",
                    marginLeft: "10px",
                  }}
                >
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

                    height: "30px",
                    width: "30px",
                    display: "inline-block",
                  },
                }}
              >
                <CheckIcon />
                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "25px",
                    marginLeft: "10px",
                  }}
                >
                  Receive booking confirmation within 12 hours
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            "& > span": {
              padding: "0px",
            },
          }}
        >
          <Checkbox
            width="14px"
            height="14px"
            name="saveAddress"
            value="yes"
            // color="rgb(209, 212, 227)"
          />
          <Typography
            sx={{
              color: "#12172A",
              marginLeft: "10px",
              "& a": {
                color: "#1B40A6",
                textDecoration: "none",
              },
            }}
          >
            I accept Yay <Link>Fly’s terms & conditions.</Link>
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px", marginBottom: "5px" }}>
          <Link
            to="/payment"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              width: "100%",
              maxWidth: "345px",
              fontSize: "20px",
              height: "52px",
              boxShadow: "none",
              background: "#12172A",
              textAlign: "center",
              lineHeight: "52px",
              textDecoration: "none",
              color: "#fff",
              borderRadius: "5px",
              fontWeight: 500,
            }}
          >
            Pay $194.64
          </Link>
        </Box>
      </CardWrap>
    </div>
  );
};

export default PaymentCard;
