// import CheckIcon from "@mui/icons-material/Check";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
const TimeLineCard = styled(Box)(({ theme }) => ({
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
const TimeLineItem = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const PaymentTimeLine = () => {
  return (
    <div>
      <TimeLineCard>
        <TimeLineItem>
          <Box>
            <Typography className="timeline-icon line" sx={{}}>
              <Typography
                sx={{
                  position: "relative",
                  fontSize: "16px",
                  background: "#12172A",
                  width: "25px",
                  height: "25px",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "2px",
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
              >
                1
                {/* <CheckIcon /> */}
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              "& p": {
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0px",
                color: "rgb(0, 3, 23)",
                marginTop: "6px",
              },
            }}
          >
            <Typography>Flight results</Typography>
          </Box>
        </TimeLineItem>
        <TimeLineItem>
          <Box>
            <Typography className="timeline-icon line" sx={{}}>
              <Typography
                sx={{
                  position: "relative",
                  fontSize: "16px",
                  background: "#12172A",
                  width: "25px",
                  height: "25px",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "2px",
                  borderRadius: "50%",
                }}
              >
                2
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              "& p": {
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0px",
                color: "rgb(0, 3, 23)",
                marginTop: "6px",
              },
            }}
          >
            <Typography>Flight results</Typography>
          </Box>
        </TimeLineItem>
        <TimeLineItem>
          <Box>
            <Typography className="timeline-icon line" sx={{}}>
              <Typography
                sx={{
                  position: "relative",
                  fontSize: "16px",
                  background: "#12172A",
                  width: "25px",
                  height: "25px",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "2px",
                  borderRadius: "50%",
                }}
              >
                3
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              "& p": {
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0px",
                color: "rgb(0, 3, 23)",
                marginTop: "6px",
              },
            }}
          >
            <Typography>Flight results</Typography>
          </Box>
        </TimeLineItem>
        <TimeLineItem>
          <Box>
            <Typography
              className="timeline-icon"
              sx={{
                "& .MuiBox-root": {
                  lineHeight: 0,
                },
              }}
            >
              <Typography
                sx={{
                  position: "relative",
                  fontSize: "16px",
                  background: "#12172A",
                  width: "25px",
                  height: "25px",
                  lineHeight: "25px",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "2px",
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
              >
                4
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              "& p": {
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0px",
                color: "rgb(0, 3, 23)",
                marginTop: "6px",
              },
            }}
          >
            <Typography>Flight results</Typography>
          </Box>
        </TimeLineItem>
      </TimeLineCard>
    </div>
  );
};

export default PaymentTimeLine;
