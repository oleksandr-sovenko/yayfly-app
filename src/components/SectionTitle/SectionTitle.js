import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "'Public Sans', sans-serif",
          fontSize: "24px",
          lineHeight: "28px",
          paddingLeft: {md:"0px", xs:"15px"},
          fontWeight: "700",
          margin: "15px 0",
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default SectionTitle;
