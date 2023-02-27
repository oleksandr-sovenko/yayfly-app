import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Box, Grid, InputLabel, styled, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
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

const PassengerCard = () => {
  return (
    <Box className="passenger-card">
      <SectionTitle title="Passengers" />
      <CardWrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "25px",
          }}
        >
          <AccountBoxIcon
            sx={{
              width: "30px",
              height: "30px",
              marginRight: "22px",
            }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: 700,
            }}
          >
            Contact details
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{
                  fontWeight: 700,
                  color: "rgb(0 3 23)",
                  marginBottom: "4px",
                  fontSize: "14px",
                }}
              >
                Given names
              </InputLabel>
              <input
                className="passenger-input"
                type="text"
                placeholder="e.g. Oliver James"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{
                  fontWeight: 700,
                  color: "rgb(0 3 23)",
                  marginBottom: "4px",
                  fontSize: "14px",
                }}
              >
                Given names
              </InputLabel>
              <input
                className="passenger-input"
                type="text"
                placeholder="e.g. Oliver James"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{
                  fontWeight: 700,
                  color: "rgb(0 3 23)",
                  marginBottom: "4px",
                  fontSize: "14px",
                }}
              >
                Given names
              </InputLabel>
              <input
                className="passenger-input"
                type="text"
                placeholder="e.g. Oliver James"
              />
            </Grid>
          </Grid>
        </Box>
      </CardWrap>
    </Box>
  );
};

export default PassengerCard;
