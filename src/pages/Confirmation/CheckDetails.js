import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, styled, Typography, Grid, Dialog } from "@mui/material";
import { GiSchoolBag } from "react-icons/gi";
import { default as React, useState } from "react";
import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";
import { getSeatsData } from "../../functions";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { SeatSelection } from '@duffel/components'


const CardWrap = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    fontFamily: "'Public Sans', sans-serif",
    boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
    borderRadius: "5px",
    marginBottom: "30px",
    color: "rgb(0, 3, 23)",
}));


const CheckDetails = (props) => {
    const [openSeats, setOpenSeats] = useState(false),
          offer = props.offer ? props.offer : {},
          passengers = props.passengers ? props.passengers : {},
          contactDetails = props.contactDetails ? props.contactDetails : {},
          seats = props.seats ? props.seats : {},
          seatsData = getSeatsData(offer, seats);

    return (
        <div>
            <Dialog open={openSeats} fullWidth={true} className="modal-duffel-components">
                <SeatSelection
                    offer={offer}
                    seatMaps={offer.seatmaps.data}
                    passengers={passengers.map((item) => { return {id: item.id, name: `${item.given_name} ${item.family_name}`.trim()}; })}
                    initialSeatSelection={seats}
                    onSubmit={(data) => {
                        if (typeof props.onSeatsChanged === 'function')
                            props.onSeatsChanged(data);

                        setOpenSeats(false);
                    }}
                />
            </Dialog>


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
                    {Object.keys(passengers).map((i, index) => {
                        const passenger = passengers[i];

                        return (
                            <Box key={index} sx={{ paddingTop: 3 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Name:
                                    <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                                        {passenger.given_name} {passenger.family_name}
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Nationality:
                                    <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                                        {passenger.nationality}
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontWeight: 700, display: 'inline-block' }}>
                                    Gender:
                                    <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                                        {passenger.gender === 'f' ? 'Female' : 'Male'}
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Birth Date:
                                    <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                                        {passenger.birth_month}/{passenger.birth_day}/{passenger.birth_year}
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Passport/ID:
                                    <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                                        {passenger.passport_id}
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Expiration Date:
                                    <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                                        {passenger.passport_expiry_month}/{passenger.passport_expiry_day}/{passenger.passport_expiry_year}
                                    </Typography>
                                </Typography>
                            </Box>
                        )
                    })}

                    <Box sx={{ marginTop: "20px" }}>
                        <Box sx={{ marginBottom: "5px" }}>
                            <Typography sx={{ fontWeight: 500, paddingBottom: "10px" }}>
                                Seats
                            </Typography>
                            <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" justifyContent="center" alignItems="center" sx={{ background: "rgb(234 236 243 / 73%)", border: "2px solid #5452F6", borderRadius: "5px", padding: "10px 0px", cursor: "pointer" }} onClick={(e) => { setOpenSeats(true) }}>
                                <Box gridColumn="span 1" sx={{ textAlign: "center", color: "hsl(232deg 78% 13% / 50%)", fontSize: "20px", padding: "0 10px" }}>
                                    <img src="https://yayfly.com/wp-content/plugins/yayfly/images/person-seat-reclined.svg" />
                                </Box>
                                <Box gridColumn="span 10" sx={{ marginLeft: "10px" }}>
                                    {Object.keys(seatsData.passengers).length ? (
                                        <>
                                            {Object.values(passengers).map((p, i) => {
                                                if (seatsData.passengers[p.id]) {
                                                    return (
                                                        <div key={i}>
                                                            <b key={`b${i}`}>{p.given_name} {p.family_name}</b>

                                                            {seatsData.passengers[p.id].map((s, j) => {
                                                                return (
                                                                    <small key={j}>, {s.origin} -> {s.destination} ({s.designator})</small>
                                                                )
                                                            })}
                                                        </div>
                                                    );
                                                } else {
                                                    return (<></>);
                                                }
                                            })}
                                        </>
                                    ) : (
                                        <div>No seats selected</div>                                    
                                    )}
                                </Box>
                                <Box gridColumn="span 1" sx={{ textAlign: "center", fontSize: "14px", fontWeight: 500, marginRight: "30px" }}>
                                    {Object.keys(seatsData.passengers).length ? (
                                        <>
                                            <Typography>${seatsData.total_amount}</Typography>
                                        </>
                                    ) : (<></>)}
                                </Box>
                            </Grid>
                        </Box>
                    </Box>

                </CardWrap>
                <CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
                    <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}>
                        <AccountCircleIcon sx={{ width: "30px", height: "30px", marginRight: "22px" }}/>
                        <Typography sx={{ fontSize: "18px", lineHeight: "25px", fontWeight: 700 }}>Contact details</Typography>
                    </Box>               
                    <Typography sx={{ fontWeight: 700 }}>
                        Email:
                        <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                            {contactDetails.email}
                        </Typography>
                    </Typography>

                    <Typography sx={{ fontWeight: 700 }}>
                        Phone:
                        <Typography component="span" sx={{ fontWeight: 400, marginLeft: 1 }}>
                            +1 {contactDetails.phone_number}
                        </Typography>
                    </Typography>
                </CardWrap>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
                <Link to={'#'} style={{ display: "inline-block", width: "94px", height: "52px", boxShadow: "none", background: "#D2D4E1", textAlign: "center", lineHeight: "52px", textDecoration: "none", color: "#010416", borderRadius: "5px", fontWeight: 500 }} onClick={(e) => { e.preventDefault(); window.history.back(); }}>Back</Link>
                <Link to={'#'} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", width: "260px", maxWidth: "260px", fontSize: "20px", height: "52px", boxShadow: "none", background: "#12172A", textAlign: "center", lineHeight: "52px", textDecoration: "none", color: "#fff", borderRadius: "5px", fontWeight: 500 }} onClick={(e) => { e.preventDefault(); localStorage['seats'] = JSON.stringify(Object.values(seats)); window.location.href = `/payment/${offer.id}`;  }}>Proceed to payment <IoIosAirplane />
                </Link>
            </Box>
        </Box>
        </div>
    );
};


export default CheckDetails;
