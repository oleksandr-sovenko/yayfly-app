import { Typography } from "@mui/material";
import React from "react";

const MobileTimeLineCard = styled(Box)(({ theme }) => ({
  fontFamily: '"Public Sans", sans-serif',
  position: "relative",
  backgroundColor: "rgb(255, 255, 255)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  letterSpacing: "0px",
  marginBottom: "40px",
  padding: "21px",
  boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
  borderRadius: "5px",
}));
const MobileTimeLine = () => {
  return (
    <div>
      <MobileTimeLine>
        <Box>Number</Box>
        <Box>
          <Typography>Provide personal details</Typography>
          <Typography>Next: credit check</Typography>
        </Box>
      </MobileTimeLine>
    </div>
  );
};

export default MobileTimeLine;
