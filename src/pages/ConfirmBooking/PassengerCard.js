import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, InputLabel, styled, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { GiSchoolBag } from "react-icons/gi";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const CardWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  fontFamily: '"Public Sans", sans-serif',
  boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
  borderRadius: "5px",
  marginBottom: "30px",
  color: "rgb(0, 3, 23)",
}));

const PassengerCard = () => {
  return (
    <Box className="passenger-card">
      <SectionTitle title="Passengers" />
      <CardWrap
        sx={{
          padding: { md: "35px", xs: "20px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            paddingBottom: "25px",
          }}
        >
          <AccountCircleIcon
            sx={{
              width: "30px",
              height: "30px",
              marginRight: { md: "22px", xs: "16px" },
            }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: 700,
              }}
            >
              Passenger 1
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Use all given names and surnames exactly as per passport/ID.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Grid container spacing="10px">
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
                Surname (s)
              </InputLabel>
              <input
                className="passenger-input"
                type="text"
                placeholder="e.g. Brown"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container spacing="10px">
                <Grid item xs={8} sm={8}>
                  <InputLabel
                    sx={{
                      fontWeight: 700,
                      color: "rgb(0 3 23)",
                      marginBottom: "4px",
                      fontSize: "14px",
                    }}
                  >
                    Nationality
                  </InputLabel>
                  <input
                    className="passenger-input"
                    type="text"
                    placeholder="e.g. United Kingdom"
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <InputLabel
                    sx={{
                      fontWeight: 700,
                      color: "rgb(0 3 23)",
                      marginBottom: "4px",
                      fontSize: "14px",
                    }}
                  >
                    Gender
                  </InputLabel>
                  <select className="gender-select">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                  {/* <Select
                    sx={{
                      width: "100%",
                      background: "#fff",
                      "& .MuiInputBase-root": {
                        margin: "0",
                      },
                      "& 	.MuiSelect-select": {
                        padding: "8.5px 14px",
                      },
                    }}
                    id="demo-simple-select"
                    name="accountType"
                    defaultValue="Male"
                    fullWidth
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select> */}
                </Grid>
              </Grid>
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
                Date of birth
              </InputLabel>
              <Grid container spacing="10px">
                <Grid item xs={6} sm={6}>
                  <select className="gender-select">
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                  </select>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <input
                    className="passenger-input"
                    type="number"
                    placeholder="DD"
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <input
                    className="passenger-input"
                    type="number"
                    placeholder="YYYY"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <InputLabel
                      sx={{
                        fontWeight: 700,
                        color: "rgb(0 3 23)",
                        marginBottom: "4px",
                        fontSize: "14px",
                      }}
                    >
                      Passport or Id number
                    </InputLabel>
                    <Typography
                      sx={{
                        "& a": {
                          fontSize: "14px",
                          color: "rgb(7 14 57 / 50%)",
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <a href="#">Help me,it's expired</a>
                    </Typography>
                  </Box>
                  <input
                    className="passenger-input"
                    type="text"
                    placeholder="Passport or Id number"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing="10px">
                <Grid item xs={9} sm={9}>
                  <InputLabel
                    sx={{
                      fontWeight: 700,
                      color: "rgb(0 3 23)",
                      marginBottom: "4px",
                      fontSize: "14px",
                    }}
                  >
                    Passport or ID expiry date
                  </InputLabel>
                  <Grid container spacing="10px">
                    <Grid item xs={6} sm={6}>
                      <select className="gender-select">
                        <option>Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                      </select>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <input
                        className="passenger-input"
                        type="number"
                        placeholder="DD"
                      />
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <input
                        className="passenger-input"
                        type="number"
                        placeholder="YYYY"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <InputLabel
                    sx={{
                      fontWeight: 700,
                      color: "rgb(0 3 23)",
                      marginBottom: "4px",
                      fontSize: "14px",
                    }}
                  >
                    No expiry
                  </InputLabel>
                  <Checkbox
                    sx={{ color: "rgb(209, 212, 227)" }}
                    width="14px"
                    height="14px"
                    name="saveAddress"
                    value="yes"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <Box sx={{ marginBottom: "52px" }}>
            <Typography sx={{ fontWeight: 500, paddingBottom: "10px" }}>
              Cabin Luggage
            </Typography>
            <Grid
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              justifyContent="center"
              alignItems="center"
              // gap={2}
              sx={{
                background: "rgb(234 236 243 / 73%)",
                height: "60px",
                border: "2px solid #5452F6",
                borderRadius: "5px",
                // padding: "20px 32px",
              }}
            >
              <Box
                gridColumn="span 1"
                sx={{
                  textAlign: "center",
                  color: "hsl(232deg 78% 13% / 50%)",
                  fontSize: "20px",
                  padding: "0 10px",
                }}
              >
                <GiSchoolBag />
              </Box>
              <Box gridColumn="span 10" sx={{ marginLeft: "10px" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  Cabin bag
                </Typography>
                <Typography
                  sx={{ color: "hsl(232deg 78% 13% / 50%)", fontSize: "14px" }}
                >
                  43 × 33 x 20 cm, 3kg
                </Typography>
              </Box>
              <Box
                gridColumn="span 1"
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  marginRight: "30px",
                }}
              >
                <Typography>Free</Typography>
              </Box>
            </Grid>
          </Box>
          <Box sx={{ paddingBottom: "20px" }}>
            <Typography sx={{ fontWeight: 500 }}>Checked Luggage</Typography>
            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
              Select one option
            </Typography>
            <Grid
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              justifyContent="center"
              alignItems="center"
              marginBottom="15px"
              // gap={2}
              sx={{
                background: "rgb(234 236 243 / 73%)",
                height: "60px",
                border: "2px solid #5452F6",
                borderRadius: "5px",
                // padding: "20px 32px",
              }}
            >
              <Box
                gridColumn="span 1"
                sx={{
                  textAlign: "end",
                  color: "#010316",
                  fontSize: "22px",
                  fontWeight: 900,
                }}
              >
                <CloseIcon />
              </Box>
              <Box gridColumn="span 11" sx={{ marginLeft: "20px" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  No Checked baggage
                </Typography>
              </Box>
            </Grid>
            <Grid
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              justifyContent="center"
              alignItems="center"
              // gap={2}
              sx={{
                background: "rgb(234 236 243 / 73%)",
                height: "60px",
                // border: "2px solid #5452F6",
                borderRadius: "5px",
              }}
            >
              <Box
                gridColumn="span 1"
                sx={{
                  textAlign: "center",
                  color: "hsl(232deg 78% 13% / 50%)",
                  fontSize: "20px",
                  padding: "0 10px",
                }}
              >
                <FiBriefcase />
              </Box>
              <Box gridColumn="span 10" sx={{ marginLeft: "10px" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  22kg checked bag
                </Typography>
                <Typography
                  sx={{ color: "hsl(232deg 78% 13% / 50%)", fontSize: "14px" }}
                >
                  78 × 52 x 27 cm, 22kg
                </Typography>
              </Box>
              <Box
                gridColumn="span 1"
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  marginRight: "30px",
                }}
              >
                <Typography>Free</Typography>
              </Box>
            </Grid>
          </Box>
        </Box>
      </CardWrap>
    </Box>
  );
};

export default PassengerCard;
