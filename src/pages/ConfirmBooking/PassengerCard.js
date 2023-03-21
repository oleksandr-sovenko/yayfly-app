import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, InputLabel, styled, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
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
    const offer = props.offer ? props.offer : {},
          passengers = props.passengers ? props.passengers : {},
          additionalBaggage = props.additionalBaggage ? props.additionalBaggage : {};

    const input = (e) => {
        const el = e.target;

        el.classList.remove('error');
    }

    const change = (e) => {
        const el = e.target;
        
        el.classList.remove('error');
    }

    const clickBaggage = (el, id, data) => {
        const passengerItem = el.closest('.passenger-item');

        for (const item of passengerItem.querySelectorAll('.baggage-item'))
            item.classList.remove('active');

        if (el.classList.contains('baggage-item'))
            el.classList.add('active');
        else {
            el.closest('.baggage-item').classList.add('active');
        }

        if (typeof props.onClickedBaggage === 'function')
            props.onClickedBaggage(id, data);
    }

    if (!offer.passengers)
        return (<></>)
    else
        return (
            <Box className="passenger-card">
                <SectionTitle title="Passengers" />

                {offer.passengers.map((item, index) => {
                    let data = {};

                    for (const name of ['given_name', 'family_name', 'nationality', 'gender', 'birth_month', 'birth_day', 'birth_year', 'passport_id', 'passport_expiry_month', 'passport_expiry_day', 'passport_expiry_year']) {
                        if (passengers[index] && passengers[index][name])
                            data[name] = passengers[index][name];
                    }

                    return (
                        <CardWrap key={index} sx={{ padding: { md: "35px", xs: "20px" } }} className="passenger-item">
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
                                        <input defaultValue={data['given_name']} name={'given_name[' + index + ']'} className="passenger-input" type="text" placeholder="e.g. Oliver James" onInput={input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                            Surname (s)
                                        </InputLabel>
                                        <input defaultValue={data['family_name']} name={'family_name[' + index + ']'} className="passenger-input" type="text" placeholder="e.g. Brown" onInput={input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Grid container spacing="10px">
                                            <Grid item xs={8} sm={8}>
                                                <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                    Nationality
                                                </InputLabel>
                                                <input defaultValue={data['nationality']} name={'nationality[' + index + ']'} className="passenger-input" type="text" placeholder="e.g. United Kingdom" onInput={input} />
                                            </Grid>
                                            <Grid item xs={4} sm={4}>
                                                <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                    Gender
                                                </InputLabel>
                                                <select defaultValue={data['gender']} name={'gender[' + index + ']'} className="gender-select" placeholder="Gender" onInput={change}>
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
                                                <select defaultValue={data['birth_month']} name={'birth_month[' + index + ']'} className="gender-select" placeholder="Month" onChange={change}>
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
                                                <input defaultValue={data['birth_day']} name={'birth_day[' + index + ']'} className="passenger-input" type="number" placeholder="DD" onInput={input} />
                                            </Grid>
                                            <Grid item xs={3} sm={3}>
                                                <input defaultValue={data['birth_year']} name={'birth_year[' + index + ']'} className="passenger-input" type="number" placeholder="YYYY" onInput={input} />
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
                                                <input defaultValue={data['passport_id']} name={'passport_id[' + index + ']'} className="passenger-input" type="text" placeholder="Passport or Id number" onInput={input} />
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
                                                        <select defaultValue={data['passport_expiry_month']} name={'passport_expiry_month[' + index + ']'} className="gender-select" placeholder="Month" onChange={change}>
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
                                                        <input defaultValue={data['passport_expiry_day']} name={'passport_expiry_day[' + index + ']'} className="passenger-input" type="number" placeholder="DD" onInput={input} />
                                                    </Grid>
                                                    <Grid item xs={3} sm={3}>
                                                        <input defaultValue={data['passport_expiry_year']} name={'passport_expiry_year[' + index + ']'} className="passenger-input" type="number" placeholder="YYYY" onInput={input} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={3} sm={3}>
                                                <InputLabel sx={{ fontWeight: 700, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
                                                    No expiry
                                                </InputLabel>
                                                <Checkbox sx={{ color: "rgb(209, 212, 227)" }} width="14px" height="14px" name={'no_expiry[' + index + ']'} value="yes" />
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
                                                Carry on
                                            </Typography>
                                            <Typography sx={{ color: "hsl(232deg 78% 13% / 50%)", fontSize: "14px" }}>
                                                45 × 56 x 25 cm, 10kg
                                            </Typography>
                                        </Box>
                                        <Box gridColumn="span 1" sx={{ textAlign: "center", fontSize: "14px", fontWeight: 500, marginRight: "30px" }}>
                                            <Typography>Free</Typography>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Box sx={{ paddingBottom: "20px" }}>
                                    <Typography sx={{ fontWeight: 500 }}>Checked Luggage</Typography>

                                    {offer.available_services[index] && offer.available_services[index].type === 'baggage' ? (
                                        <>
                                            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                                                Select one option
                                            </Typography>

                                            <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" justifyContent="center" alignItems="center" marginBottom="15px" sx={{ background: "rgb(234 236 243 / 73%)", height: "60px", borderRadius: "5px", cursor: "pointer" }} className="baggage-item active" onClick={(e) => {
                                                    const service = offer.available_services[index];

                                                    clickBaggage(e.target, service.id, null);
                                                }}>
                                                <Box gridColumn="span 1" sx={{ textAlign: "end", color: "#010316", fontSize: "22px", fontWeight: 900 }}>
                                                    <CloseIcon />
                                                </Box>
                                                <Box gridColumn="span 11" sx={{ marginLeft: "20px" }}>
                                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                                        No Checked baggage
                                                    </Typography>
                                                </Box>
                                            </Grid>

                                            <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" justifyContent="center" alignItems="center" sx={{ background: "rgb(234 236 243 / 73%)", height: "60px", borderRadius: "5px", cursor: "pointer" }} className="baggage-item" onClick={(e) => {
                                                    const service = offer.available_services[index],
                                                          data = {
                                                            id: service.id,
                                                            metadata: service.metadata,
                                                            passenger_ids: service.passenger_ids,
                                                            quantity: 1,
                                                            segment_ids: service.segment_ids,
                                                            total_amount: service.total_amount,
                                                            total_currency: service.total_currency,
                                                            type: service.type
                                                        };

                                                    clickBaggage(e.target, service.id, data);
                                                }}>
                                                <Box gridColumn="span 1" sx={{ textAlign: "center", color: "hsl(232deg 78% 13% / 50%)", fontSize: "20px", padding: "0 10px" }}>
                                                    <FiBriefcase />
                                                </Box>
                                                <Box gridColumn="span 10" sx={{ marginLeft: "10px" }}>
                                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                                        Checked bag
                                                    </Typography>
                                                    <Typography sx={{ color: "hsl(232deg 78% 13% / 50%)", fontSize: "14px" }}>
                                                        52 × 78 x 27 cm, {offer.available_services[index].metadata.maximum_weight_kg}kg
                                                    </Typography>
                                                </Box>
                                                <Box gridColumn="span 1" sx={{ textAlign: "center", fontSize: "14px", fontWeight: 500, marginRight: "30px" }}>
                                                    <Typography>${offer.available_services[index].total_amount}</Typography>
                                                </Box>
                                            </Grid>
                                        </>
                                    ) : (
                                        <>
                                            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                                                No checked baggage available
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            </Box>
                        </CardWrap>
                    )
                })}
            </Box>
        );
};


export default PassengerCard;
