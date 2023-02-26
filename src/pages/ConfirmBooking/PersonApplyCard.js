import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const CardWrap = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "3px",
  padding: "37px 35px 20px",
  marginBottom: "20px",
  "& > Box > Typography": {
    fontSize: "18px",
    lineHeight: "25px",
  },
  "@media (max-width: 600px)": {},
  [theme.breakpoints.down("md")]: {},
}));

const PersonApplyCard = () => {
  return (
    <Box className="person-card">
      <h3></h3>
      <SectionTitle title="Person Paying" />
      <CardWrap>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SwitchAccountIcon
            sx={{
              width: "30px",
              height: "30px",
              marginRight: "22px",
            }}
          />
          <Typography
          //   sx={{
          //     fontSize: "18px",
          //     lineHeight: "25px",
          //   }}
          >
            Contact Details
          </Typography>
        </Box>
      </CardWrap>
      <CardWrap>
        <Box>
          <Box>
            <SwitchAccountIcon />
            <Typography>Contact Details</Typography>
          </Box>
          <Box>
            <SwitchAccountIcon />
            <Typography>Contact Details</Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <img src="" alt="TicketImg" />
          </Box>
          <Box></Box>
        </Box>
      </CardWrap>
    </Box>
  );
};

export default PersonApplyCard;
