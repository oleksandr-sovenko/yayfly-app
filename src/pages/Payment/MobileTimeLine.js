import CheckIcon from "@mui/icons-material/Check";
import { Box, Typography } from "@mui/material";
import React from "react";


const MobileTimeLine = (props) => {
    if (!props)
        props = {};

    if (!props.step)
        props.step = 0;

    const steps = [
        { title: '', descriptio: '' },
        { title: 'Provide personal details', description: 'Confirmation' },
        { title: 'Confirm Details', description: 'Payment' },
        { title: 'Payment', description: 'Complete Booking' },
    ];

    return (
        <div>
            <Box>
                <Box
                    sx={{ padding: "17px", color: "rgb(0, 3, 23)", backgroundColor: "rgb(255, 255, 255)", display: "flex", alignItems: "center", fontFamily: "Public Sans", fontStyle: "normal", letterSpacing: "0px", marginBottom: "15px", borderRadius: "5px" }}>
                    <Box sx={{ width: "65px", minWidth: "65px", maxWidth: "65px", height: "65px", minHeight: "65px", maxHeight: "65px", borderRadius: "50%", borderWidth: "5px", borderStyle: "solid", transform: "rotate(45deg)", borderColor: `${props.step < 1 ? 'rgb(225, 227, 238)' : 'rgb(19, 194, 155)'} ${props.step < 2 ? 'rgb(225, 227, 238)' : 'rgb(19, 194, 155)'} ${props.step < 3 ? 'rgb(225, 227, 238)' : 'rgb(19, 194, 155)'} ${props.step < 4 ? 'rgb(225, 227, 238)' : 'rgb(19, 194, 155)'}`, borderImage: "initial", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, lineHeight: "16px" }}>
                        <Typography component="span" sx={{ transform: "rotate(-45deg)" }}>{props.step} of 4</Typography>
                    </Box>
                    <Box sx={{ marginLeft: "22px" }}>
                        <Typography sx={{ fontSize: "18px", fontWeight: 700, lineHeight: "21px", marginBottom: "8px" }}>
                            {steps[props.step - 1].title}
                        </Typography>
                        <Typography sx={{ color: "rgba(7, 14, 57, 0.75)", fontSize: "14px", fontWeight: 400, lineHeight: "16px" }}>
                            Next: {steps[props.step - 1].description}
                        </Typography>
                    </Box>
                </Box>
                {/* timeline list */}
                <Box sx={{ width: "100%", background: { xs: "#E1F6F1" }, padding: { xs: "17px 17px 2px" }, marginBottom: { xs: "20px" }, marginTop: "15px" }}>
                    <Box sx={{ display: "grid", gridTemplateColumns: "30px 1fr", marginBottom: "10px", alignItems: "center", "& svg": { color: "rgb(19, 194, 155)", fontSize: "16px", textAlign: "center", fontWeight: 900, height: "20px", width: "20px", display: "inline-block" } }}>
                        <CheckIcon />
                        <Typography sx={{ fontSize: "13px", lineHeight: "25px", fontFamily:"'Public Sans', sans-serif;", fontWeight: 500 }}>
                            No need to create an account
                        </Typography>
                    </Box>
                    <Box sx={{ display: "grid", gridTemplateColumns: "30px 1fr", marginBottom: "10px", alignItems: "center", "& svg": { color: "rgb(19, 194, 155)", fontSize: "16px", textAlign: "center", fontWeight: 900, height: "20px", width: "20px", display: "inline-block" } }}>
                        <CheckIcon />
                        <Typography sx={{ fontSize: "13px", lineHeight: "25px", fontFamily:"'Public Sans', sans-serif;", fontWeight: 500 }}>
                            Providing your details takes less than 2 minutes
                        </Typography>
                    </Box>
                    <Box sx={{ display: "grid", gridTemplateColumns: "30px 1fr", marginBottom: "10px", alignItems: "center", "& svg": { color: "rgb(19, 194, 155)", fontSize: "16px", textAlign: "center", fontWeight: 900, height: "20px", width: "20px", display: "inline-block" }}}>
                        <CheckIcon />
                        <Typography sx={{ fontSize: "13px", lineHeight: "25px", fontFamily:"'Public Sans', sans-serif;", fontWeight: 500 }}>
                            Receive your booking confirmation within 12 hours
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default MobileTimeLine;
