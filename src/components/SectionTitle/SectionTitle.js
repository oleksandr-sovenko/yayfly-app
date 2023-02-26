import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: "24px",
          lineHeight: "28px",
          paddingLeft: "0px",
          fontWeight: "700",
          marginBottom: "15px",
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default SectionTitle;
