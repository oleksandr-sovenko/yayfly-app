import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button, styled, Typography } from "@mui/material";
import { default as React } from "react";
import { IoIosAirplane } from "react-icons/io";
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

const CheckDetails = () => {
  return (
    <div>
      <Box className="person-card">
        <SectionTitle title="Check your details" />
        <CardWrap>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <AccountCircleIcon
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
              Passengers
            </Typography>
          </Box>
          <Typography
            sx={{
              background: "rgb(255, 237, 210)",
              fontSize: "12px",
              padding: "6px 18px",
              borderRadius: "5px",
              //   display: "flex",
              //   alignItems: "center",
            }}
          >
            Please make sure that you details match the{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 500, marginLeft: "2px" }}
            >
              details on your passport/ID
            </Typography>
          </Typography>
          <Typography sx={{ fontWeight: 700, marginTop: "16px" }}>
            Kent Raush
            <Typography sx={{ fontWeight: 400 }}>1988-05-28</Typography>
          </Typography>
        </CardWrap>
        <CardWrap>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <AccountCircleIcon
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
          <Typography
            sx={{
              background: "rgb(255, 237, 210)",
              fontSize: "12px",
              padding: "6px 18px",
              borderRadius: "5px",
              //   display: "flex",
              //   alignItems: "center",
            }}
          >
            Please make sure that you details match the{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 500, marginLeft: "2px" }}
            >
              details on your passport/ID
            </Typography>
          </Typography>
          <Typography sx={{ fontWeight: 700, marginTop: "16px" }}>
            dieraush@gmail.com
            <Typography sx={{ fontWeight: 400 }}>928249858</Typography>
          </Typography>
        </CardWrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            sx={{
              "& ..MuiButton-root": {},
            }}
          >
            Back
          </Button>
          <Button variant="contained" endIcon={<IoIosAirplane />}>
            Send
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CheckDetails;
