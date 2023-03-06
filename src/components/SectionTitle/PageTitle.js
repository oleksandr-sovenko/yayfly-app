import { Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: { md: "36px", xs: "28px" },
          lineHeight: "28px",
          paddingLeft: "0px",
          fontWeight: "700",
          color: "rgb(0, 3, 23)",
          margin: { md: "65px 0 40px", xs: "35px 0 20px" },
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default PageTitle;
