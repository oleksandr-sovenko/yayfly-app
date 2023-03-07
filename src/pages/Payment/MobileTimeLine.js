import CheckIcon from "@mui/icons-material/Check";
import { Box, Typography } from "@mui/material";
import React from "react";
const MobileTimeLine = () => {
  return (
    <div>
      <Box>
        <Box
          sx={{
            padding: "17px",
            color: "rgb(0, 3, 23)",
            backgroundColor: "rgb(255, 255, 255)",
            display: "flex",
            // -webkit-box-align: "center",
            alignItems: "center",
            fontFamily: "Public Sans",
            fontStyle: "normal",
            letterSpacing: "0px",
            marginBottom: "15px",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              width: "65px",
              minWidth: "65px",
              maxWidth: "65px",
              height: "65px",
              minHeight: "65px",
              maxHeight: "65px",
              borderRadius: "50%",
              borderWidth: "5px",
              borderStyle: "solid",
              transform: "rotate(45deg)",
              borderColor:
                "rgb(19, 194, 155) rgb(19, 194, 155) rgb(225, 227, 238) rgb(225, 227, 238)",
              borderImage: "initial",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "16px",
            }}
          >
            <Typography component="span" sx={{ transform: "rotate(-45deg)" }}>
              2 of 4
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "22px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "21px",
                marginBottom: "8px",
              }}
            >
              Provide personal details
            </Typography>
            <Typography
              sx={{
                color: "rgba(7, 14, 57, 0.75)",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              Next: credit check
            </Typography>
          </Box>
        </Box>
        {/* timeline list */}
        <Box
          sx={{
            width: "100%",
            // marginTop: { xs: "25px", sm: "0px" },
            background: { xs: "#E1F6F1" },
            padding: { xs: "17px 17px 2px" },
            marginBottom: { xs: "20px" },
            marginTop: "15px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "30px 1fr",
              marginBottom: "10px",
              alignItems: "center",
              "& svg": {
                color: "rgb(19, 194, 155)",
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 900,
                height: "20px",
                width: "20px",
                display: "inline-block",
              },
            }}
          >
            <CheckIcon />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "25px",
                marginLeft: "8px",
              }}
            >
              No need to create an account
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "30px 1fr",
              marginBottom: "10px",
              alignItems: "center",
              "& svg": {
                color: "rgb(19, 194, 155)",
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 900,
                height: "20px",
                width: "20px",
                display: "inline-block",
              },
            }}
          >
            <CheckIcon />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "25px",
                marginLeft: "8px",
              }}
            >
              Providing your details takes less than 2 minutes
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "30px 1fr",
              marginBottom: "10px",
              alignItems: "center",
              "& svg": {
                color: "rgb(19, 194, 155)",
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 900,
                height: "20px",
                width: "20px",
                display: "inline-block",
              },
            }}
          >
            <CheckIcon />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "25px",
                marginLeft: "8px",
              }}
            >
              Receive your booking confirmation within 12 hours
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MobileTimeLine;
