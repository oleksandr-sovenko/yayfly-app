import { Box, styled, Typography } from "@mui/material";
import React from "react";

const TimeLineCard = styled(Box)(({ theme }) => ({
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

const TimeLineItem = styled(Box)(({ theme }) => ({
    textAlign: "center",
}));

const PaymentTimeLine = () => {
    const steps = [
        { active: true, title: 'Flight results' },
        { active: true, title: 'Details' },
        { active: false, title: 'Confirm Details' },
        { active: false, title: 'Booking Complete' },
    ];


    return (
        <div>
            <TimeLineCard>
                {steps.map((step, index) => {
                    return (
                        <TimeLineItem key={index} className="wrapper-timeline-item">
                            <Box>
                                <Typography  component={'span'} className={step.active ? 'timeline-icon line active' : 'timeline-icon line'} sx={{}}>
                                    <Typography
                                        sx={{
                                            position: "relative",
                                            fontSize: "16px",
                                            background: "#eef1f8",
                                            width: "25px",
                                            height: "25px",
                                            color: "#192C47",
                                            fontWeight: 700,
                                            borderRadius: "50%",
                                            margin: "0 auto",
                                            lineHeight: "25px",
                                        }}
                                    >{index + 1}</Typography>
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
                                <Typography>{step.title}</Typography>
                            </Box>
                        </TimeLineItem>
                    );
                })}
            </TimeLineCard>
        </div>
    );
};

export default PaymentTimeLine;
