import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, styled, Typography } from "@mui/material";
import { default as React } from "react";
import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const CardWrap = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    fontFamily: "'Public Sans', sans-serif",
    boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
    borderRadius: "5px",
    marginBottom: "30px",
    color: "rgb(0, 3, 23)",
}));


const CheckDetails = () => {
    return (
        <div>
            <Box className="person-card">
                <SectionTitle title="Check your details" />
                <CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
                    <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}>
                        <AccountCircleIcon sx={{ width: "30px", height: "30px", marginRight: "22px" }} />
                        <Typography sx={{ fontSize: "18px", lineHeight: "25px", fontWeight: 700 }}>Passengers</Typography>
                    </Box>
                    <Typography sx={{ background: "rgb(255, 237, 210)", fontSize: "12px", padding: "6px 18px", borderRadius: "5px" }}>
                        Please make sure that you details match the{" "}
                        <Typography component="span" sx={{ fontWeight: 500, marginLeft: "2px" }}>
                            details on your passport/ID
                        </Typography>
                    </Typography>
                    <Typography sx={{ fontWeight: 700, marginTop: "16px" }}>
                        Kent Raush
                        <Typography sx={{ fontWeight: 400 }}>1988-05-28</Typography>
                    </Typography>
                </CardWrap>
                <CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
                    <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}>
                        <AccountCircleIcon sx={{ width: "30px", height: "30px", marginRight: "22px" }}/>
                        <Typography sx={{ fontSize: "18px", lineHeight: "25px", fontWeight: 700 }}>Contact details</Typography>
                    </Box>
                    <Typography sx={{ background: "rgb(255, 237, 210)", fontSize: "12px", padding: "6px 18px", borderRadius: "5px" }}>
                        Please make sure that you details match the{" "}
                        <Typography component="span" sx={{ fontWeight: 500, marginLeft: "2px" }}>details on your passport/ID</Typography>
                    </Typography>
                    <Typography sx={{ fontWeight: 700, marginTop: "16px" }}>dieraush@gmail.com
                        <Typography sx={{ fontWeight: 400 }}>928249858</Typography>
                    </Typography>
                </CardWrap>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
                <Link to="/booking-details" style={{ display: "inline-block", width: "94px", height: "52px", boxShadow: "none", background: "#D2D4E1", textAlign: "center", lineHeight: "52px", textDecoration: "none", color: "#010416", borderRadius: "5px", fontWeight: 500 }}>Back</Link>
                <Link to="/payment" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", width: "260px", maxWidth: "260px", fontSize: "20px", height: "52px", boxShadow: "none", background: "#12172A", textAlign: "center", lineHeight: "52px", textDecoration: "none", color: "#fff", borderRadius: "5px", fontWeight: 500 }}>Proceed to payment <IoIosAirplane />
                </Link>
            </Box>
        </Box>
        </div>
    );
};


export default CheckDetails;
