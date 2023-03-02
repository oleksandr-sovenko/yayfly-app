import { Typography } from "@mui/material";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: "36px",
          lineHeight: "28px",
          paddingLeft: "0px",
          fontWeight: "700",
          color: "rgb(0, 3, 23)",
          margin: "65px 0 40px",
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default PageTitle;
