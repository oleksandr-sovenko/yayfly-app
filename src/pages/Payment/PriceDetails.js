import { Box, Typography } from "@mui/material";
import React from "react";


const PriceDetails = (props) => {
    const offer = props.offer ? props.offer : {};

    let cabinClass = '-';

    try {
        if (
            offer.slices &&
            offer.slices[0].segments[0] &&
            offer.slices[0].segments[0].passengers[0] &&
            offer.slices[0].segments[0].passengers[0].cabin_class_marketing_name
        )
            cabinClass = offer.slices[0].segments[0].passengers[0].cabin_class_marketing_name;
    } catch(e) {

    }

    return (
        <Box sx={{ fontFamily: '"Public Sans", sans-serif', padding: "22px 26px", borderRadius: "5px", backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px", "& p": { fontSize: "14px" } }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
                <Typography>{offer.passengers ? offer.passengers.length : 0}x Passenger</Typography>
                <Typography>${offer ? offer.total_amount : 0}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
                <Typography>{offer.passengers ? offer.passengers.length : 0}x Cabin bg</Typography>
                <Typography>Free</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
                <Typography>Cabin Class</Typography>
                <Typography>{cabinClass}</Typography>
            </Box>
{/*            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px", "& p": { fontWeight: 700 } }}>
                <Typography>Total (GBP)</Typography>
                <Typography>$193.64</Typography>
            </Box>*/}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "15px", borderTop: "1px solid rgb(225, 227, 238)", "& p": { fontWeight: 700 } }}>
                <Typography>Total</Typography>
                <Typography>${offer ? offer.total_amount : 0}</Typography>
            </Box>
        </Box>
    );
};

export default PriceDetails;
