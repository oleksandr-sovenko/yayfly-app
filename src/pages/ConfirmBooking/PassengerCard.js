import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, InputLabel, styled, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { GiSchoolBag } from "react-icons/gi";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const CardWrap = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    fontFamily: '"Public Sans", sans-serif',
    boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
    borderRadius: "5px",
    marginBottom: "30px",
    color: "rgb(0, 3, 23)",
}));


const PassengerCard = (props) => {
    const offer = props.offer ? props.offer : {};

    const input = (e) => {
        const el = e.target;

        el.classList.remove('error');
    }

    const change = (e) => {
        const el = e.target;
        
        el.classList.remove('error');
    }

    if (!offer.passengers)
        return (<></>)
    else
        return (
            <Box className="passenger-card">
                <SectionTitle title="Passengers" />

                {offer.passengers.map((passenger, index) => {
                    return (
                        <CardWrap key={index} sx={{ padding: { md: "35px", xs: "20px" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "25px" }}>
                                <AccountCircleIcon sx={{ width: "30px", height: "30px", marginRight: { md: "22px", xs: "16px" } }} />
                                <Box>
                                    <Typography sx={{ fontSize: "18px", lineHeight: "25px", fontWeight: 700 }}>
                                        Passenger {index + 1}
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px" }}>
                                        Use all given names and surnames exactly as per passport/ID.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Grid container spacing="10px">
                                    <Grid item xs={12} sm={6}>
                                        <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                            Given names
                                        </InputLabel>
                                        <input name={'given_name[' + (index + 1) + ']'} className="passenger-input" type="text" placeholder="e.g. Oliver James" onInput={input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                            Surname (s)
                                        </InputLabel>
                                        <input name={'family_name[' + (index + 1) + ']'} className="passenger-input" type="text" placeholder="e.g. Brown" onInput={input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid container spacing="10px">
                                            <Grid item xs={8} sm={8}>
                                                <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                    Nationality
                                                </InputLabel>
                                                <input name={'nationality[' + (index + 1) + ']'} className="passenger-input" type="text" placeholder="e.g. United Kingdom" onInput={input} />
                                            </Grid>
                                            <Grid item xs={4} sm={4}>
                                                <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                    Gender
                                                </InputLabel>
                                                <select name={'gender[' + (index + 1) + ']'} className="gender-select" placeholder="Gender" onInput={change}>
                                                    <option></option>
                                                    <option value="m">Male</option>
                                                    <option value="f">Female</option>
                                                </select>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                            Date of birth
                                        </InputLabel>
                                        <Grid container spacing="10px">
                                            <Grid item xs={6} sm={6}>
                                                <select name={'birth_month[' + (index + 1) + ']'} className="gender-select" placeholder="Month" onChange={change}>
                                                    <option></option>
                                                    <option value="01">January</option>
                                                    <option value="02">February</option>
                                                    <option value="03">March</option>
                                                    <option value="04">April</option>
                                                    <option value="05">May</option>
                                                    <option value="06">June</option>
                                                    <option value="07">July</option>
                                                    <option value="08">August</option>
                                                    <option value="09">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>
                                            </Grid>
                                            <Grid item xs={3} sm={3}>
                                                <input name={'birth_day[' + (index + 1) + ']'} className="passenger-input" type="number" placeholder="DD" onInput={input} />
                                            </Grid>
                                            <Grid item xs={3} sm={3}>
                                                <input name={'birth_year[' + (index + 1) + ']'} className="passenger-input" type="number" placeholder="YYYY" onInput={input} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid container spacing="10px">
                                            <Grid item xs={12}>
                                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                    <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                        Passport or Id number
                                                    </InputLabel>
                                                    {/*<Typography sx={{ "& a": { fontSize: "14px", color: "rgb(7 14 57 / 50%)", textDecoration: "underline", cursor: "pointer" } }}>
                                                        <a href="#">Help me,it's expired</a>
                                                    </Typography>*/}
                                                </Box>
                                                <input name={'passport_id[' + (index + 1) + ']'} className="passenger-input" type="text" placeholder="Passport or Id number" onInput={input} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid container spacing="10px">
                                            <Grid item xs={9} sm={9}>
                                                <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                    Passport or ID expiry date
                                                </InputLabel>
                                                <Grid container spacing="10px">
                                                    <Grid item xs={6} sm={6}>
                                                        <select name={'passport_expiry_month[' + (index + 1) + ']'} className="gender-select" placeholder="Month" onChange={change}>
                                                            <option></option>
                                                            <option value="01">January</option>
                                                            <option value="02">February</option>
                                                            <option value="03">March</option>
                                                            <option value="04">April</option>
                                                            <option value="05">May</option>
                                                            <option value="06">June</option>
                                                            <option value="07">July</option>
                                                            <option value="08">August</option>
                                                            <option value="09">September</option>
                                                            <option value="10">October</option>
                                                            <option value="11">November</option>
                                                            <option value="12">December</option>
                                                        </select>
                                                    </Grid>
                                                    <Grid item xs={3} sm={3}>
                                                        <input name={'passport_expiry_day[' + (index + 1) + ']'} className="passenger-input" type="number" placeholder="DD" onInput={input} />
                                                    </Grid>
                                                    <Grid item xs={3} sm={3}>
                                                        <input name={'passport_expiry_year[' + (index + 1) + ']'} className="passenger-input" type="number" placeholder="YYYY" onInput={input} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={3} sm={3}>
                                                <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                    No expiry
                                                </InputLabel>
                                                <Checkbox sx={{ color: "rgb(209, 212, 227)" }} width="14px" height="14px" name={'no_expiry[' + (index + 1) + ']'} value="yes" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ marginTop: "40px" }}>
                                <Box sx={{ marginBottom: "52px" }}>
                                    <Typography sx={{ fontWeight: 500, paddingBottom: "10px" }}>
                                        Cabin Luggage
                                    </Typography>
                                    <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" justifyContent="center" alignItems="center" sx={{ background: "rgb(234 236 243 / 73%)", height: "60px", border: "2px solid #5452F6", borderRadius: "5px" }}>
                                        <Box gridColumn="span 1" sx={{ textAlign: "center", color: "hsl(232deg 78% 13% / 50%)", fontSize: "20px", padding: "0 10px" }}>
                                            <GiSchoolBag />
                                        </Box>
                                        <Box gridColumn="span 10" sx={{ marginLeft: "10px" }}>
                                            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                                Cabin bag
                                            </Typography>
                                            <Typography sx={{ color: "hsl(232deg 78% 13% / 50%)", fontSize: "14px" }}>
                                                43 × 33 x 20 cm, 3kg
                                            </Typography>
                                        </Box>
                                        <Box gridColumn="span 1" sx={{ textAlign: "center", fontSize: "14px", fontWeight: 500, marginRight: "30px" }}>
                                            <Typography>Free</Typography>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Box sx={{ paddingBottom: "20px" }}>
                                    <Typography sx={{ fontWeight: 500 }}>Checked Luggage</Typography>
                                    <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                                        Select one option
                                    </Typography>
                                    <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" justifyContent="center" alignItems="center" marginBottom="15px" sx={{ background: "rgb(234 236 243 / 73%)", height: "60px", border: "2px solid #5452F6", borderRadius: "5px" }}>
                                        <Box gridColumn="span 1" sx={{ textAlign: "end", color: "#010316", fontSize: "22px", fontWeight: 900 }}>
                                            <CloseIcon />
                                        </Box>
                                        <Box gridColumn="span 11" sx={{ marginLeft: "20px" }}>
                                            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                                No Checked baggage
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" justifyContent="center" alignItems="center" sx={{ background: "rgb(234 236 243 / 73%)", height: "60px", borderRadius: "5px" }}>
                                        <Box gridColumn="span 1" sx={{ textAlign: "center", color: "hsl(232deg 78% 13% / 50%)", fontSize: "20px", padding: "0 10px" }}>
                                            <FiBriefcase />
                                        </Box>
                                        <Box gridColumn="span 10" sx={{ marginLeft: "10px" }}>
                                            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                                22kg checked bag
                                            </Typography>
                                            <Typography sx={{ color: "hsl(232deg 78% 13% / 50%)", fontSize: "14px" }}>
                                                78 × 52 x 27 cm, 22kg
                                            </Typography>
                                        </Box>
                                        <Box gridColumn="span 1" sx={{ textAlign: "center", fontSize: "14px", fontWeight: 500, marginRight: "30px" }}>
                                            <Typography>Free</Typography>
                                        </Box>
                                    </Grid>
                                </Box>
                            </Box>
                        </CardWrap>
                    )
                })}
            </Box>
        );
};


export default PassengerCard;
