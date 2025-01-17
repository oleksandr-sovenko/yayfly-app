import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CheckIcon from "@mui/icons-material/Check";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Checkbox, FormControlLabel, Grid, InputLabel, styled, Typography } from "@mui/material";
import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";
import airHelp from "../../assets/confirm-booking/air-help.png";
import supportPhotoVector from "../../assets/confirm-booking/supportPhotoVector.png";
import ticketService from "../../assets/confirm-booking/ticket-service-img.svg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const CardWrap = styled(Box)(({ theme }) => ({
	backgroundColor: "white",
	fontFamily: '"Public Sans", sans-serif',
	boxShadow: "rgb(101 101 101 / 5%) 4px 4px 12px",
	borderRadius: "5px",
	marginBottom: "30px",
	color: "rgb(0, 3, 23)",
}));


const CardButton = styled(Box)(({ theme }) => ({
	fontSize: "14px",
	color: "rgb(72, 96, 255)",
	border: "2px solid rgb(72, 96, 255);",
	width: "210px",
	fontFamily: '"Public Sans", sans-serif',
	lineHeight: "35px",
	textAlign: "center",
	cursor: "pointer",
	borderRadius: "5px",
	fontWeight: 700,
	marginTop: "35px",
}));


const PersonApplyCard = (props) => {
	const id = window.location.pathname.replace(/.*\//, ''),
		  offer = props.offer ? props.offer : {},
		  contactDetails = props.contactDetails ? props.contactDetails : {},
		  additionalBaggage = props.additionalBaggage ? props.additionalBaggage : {};

    const input = (e) => {
        const el = e.target;

        el.classList.remove('error');
    }

    const change = (e) => {
        const el = e.target;
        
        el.classList.remove('error');
    }

    const click = (e, type) => {
    	e.preventDefault();

        const el = e.target,
        	  page = el.closest('.booking-pages');

        if (type === 'confirm') {
        	let passengers = {};

       		for (const input of page.querySelectorAll('input, select')) {
       			const index = parseInt(input.name.replace(/.*\[/, '')),
       				  name  = input.name.replace(/\[.*/, ''),
       				  value = input.value;

				if (input.value.length === 0)
					input.classList.add('error');


       			if (!isNaN(index)) {
       				if (!passengers[index])
       					passengers[index] = { id: offer.passengers[index].id };

					passengers[index][name] = value;
				}
       		}

       		if (document.querySelector('input.error')) {
       			window.scroll({ top: document.querySelector('input.error').offsetTop - 50, left: 0, behavior: 'smooth' });
       		} else {
       			const accept = page.querySelector('input[name="accept"]');

       			if (accept.checked) {
       				localStorage.removeItem('seats');
       				localStorage.removeItem('order');

       				localStorage['offer'] = JSON.stringify(offer);
       				localStorage['passengers'] = JSON.stringify(Object.values(passengers));
       				localStorage['contactDetails'] = JSON.stringify({
       					email: page.querySelector('input[name="email"]').value,
       					phone_number: page.querySelector('input[name="phone_number"]').value,
       				});
       				localStorage['additionalBaggage'] = JSON.stringify(Object.values(additionalBaggage));

       				window.location.href = `/confirm-booking/${id}`;
       			} else {
       				accept.closest('label').classList.add('error');

       				setTimeout(() => {
						accept.closest('label').classList.remove('error');
       				}, 1500);
       			}
       		}
       	}
    }

	return (
		<Box className="person-card">
	  		<SectionTitle title="Person Paying" />
			<CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
				<Box sx={{ display: "flex", alignItems: "center", paddingBottom: "25px" }}>
					<AccountBoxIcon sx={{ width: "30px", height: "30px", marginRight: { md: "22px", xs: "16px" } }} />
					<Typography sx={{ fontSize: "18px", lineHeight: "25px", fontWeight: 700 }}>
						Contact details
					</Typography>
				</Box>
				<Grid container spacing="12px" sx={{ padding: "16px 0" }}>
					<Grid item xs={12} sm={6}>
						<InputLabel sx={{ fontWeight: 600, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
							E-mail address
						</InputLabel>
						<input name="email" className="passenger-input" type="text" placeholder="your@gmail.com" onInput={input}  defaultValue={contactDetails.email ? contactDetails.email : ''} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputLabel sx={{ fontWeight: 600, color: "rgb(0 3 23)", marginBottom: "4px", fontSize: "14px" }}>
							Mobile phone number
						</InputLabel>
						<Box sx={{ display: "flex", alignItems: "center", "& input": { borderLeft: "none", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}}>
							<Typography sx={{ height: "40px", width: "52px", background: "#D9D9D9", color: "rgba(7, 14, 57, 0.75)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(209, 212, 227)", fontSize: "14px", fontWeight: 400, lineHeight: "16px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px" }}>
								+1
							</Typography>
							<input name="phone_number" className="passenger-input" type="text" placeholder="e.g 4131234567" onInput={input} defaultValue={contactDetails.phone_number ? contactDetails.phone_number : ''} />
						</Box>
					</Grid>
				</Grid>
			</CardWrap>
{/*			<CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Box sx={{ display: "flex", alignItems: "center", paddingBottom: "25px" }}>
						<ManageAccountsIcon sx={{ width: "30px", height: "30px", marginRight: "22px" }} />
						<Typography sx={{ fontSize: "18px", lineHeight: "25px", fontWeight: 700 }}>
							Ticket service and protection
						</Typography>
					</Box>
					<Box>
						<img src={airHelp} style={{ width: "100px", height: "25px" }} alt="Air Help-img" />
					</Box>
				</Box>
				<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", marginTop: "20px" }}>
					<img style={{ Width: "300px", maxHeight: "300px" }} src={ticketService} alt="TicketImg" />
					<Box sx={{ width: "100%", marginLeft: { md: "15px" } }}>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px", marginTop: { xs: "20px", md: "0px" } }}>
							<CheckIcon sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }} />
							<Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
								Protect your flight against airline bankruptcy.
							</Typography>
						</Box>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px" }}>
							<CheckIcon sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }}/>
							<Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
								Receive up to <span sx={{ fontWeight: 700 }}>£500</span> for
								flight delays and cancellations.
							</Typography>
						</Box>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px" }}>
							<Box sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }}></Box>
							<Typography sx={{ fontSize: "14px", lineHeight: "25px", fontWeight: 500, color: "rgb(7 14 57 / 50%)" }}>Learn more</Typography>
						</Box>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px" }}>
							<Box sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }}></Box>
							<CardButton>Add AirHelp + £ 19.50 pp</CardButton>
						</Box>
					</Box>
				</Box>
			</CardWrap>*/}
{/*			<CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
				<Box sx={{ display: "flex", alignItems: "center", paddingBottom: "25px" }}>
					<PhoneIcon sx={{ width: "30px", height: "30px", marginRight: "22px" }}/>
					<Typography sx={{ fontSize: "18px", lineHeight: "25px", fontWeight: 700 }}>
						Premium support package
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", md: "row" }, marginTop: "20px", "& img": { width: "300px !important", maxHeight: "200px" } }}>
					<img src={supportPhotoVector} alt="TicketImg" />
					<Box sx={{ width: "100%", marginLeft: { md: "15px" } }}>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px", marginTop: { xs: "20px", md: "0px" } }}>
							<CheckIcon sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }}/>
							<Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
								Webchat support 7 days a week
							</Typography>
						</Box>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px" }}>
							<CheckIcon sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }}/>
							<Typography sx={{ fontSize: "14px", lineHeight: "25px" }}>
								Priority customer support
							</Typography>
						</Box>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px" }}>
							<Box sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }}></Box>
							<Typography sx={{ fontSize: "14px", lineHeight: "25px", fontWeight: 500, color: "rgb(7 14 57 / 50%)" }}>
								Learn more
							</Typography>
						</Box>
						<Box sx={{ display: "grid", gridTemplateColumns: "25px 1fr", marginBottom: "5px" }}>
							<Box sx={{ color: "rgb(19 194 155)", fontSize: "14px", marginTop: "auto", marginBottom: "auto" }}></Box>
							<CardButton>Add support + £ 8.50 pp</CardButton>
						</Box>
					</Box>
				</Box>
			</CardWrap>*/}
{/*			<CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
				<Typography sx={{ fontSize: "13px", marginBottom: "6px" }}>
					Do you have a discount code?
				</Typography>
				<form>
					<Box sx={{ display: "flex", alignItems: "center", "& input": { border: "1px solid rgb(209, 212, 227)", borderRadius: "3px", height: "40px", padding: "4px 11px" }, "& button": { color: "rgb(0, 3, 23)", backgroundColor: "rgb(209, 212, 227)", border: "none", marginLeft: "10px", borderRadius: "3px", height: "40px", outline: "none",minWidth: "95px", cursor: "pointer" } }}>
						<input name="discount" className="discount-input" type="text" onInput={input} />
						<button type="submit" onClick={(e) => { click(e, 'discount') }}>Submit</button>
					</Box>
				</form>
			</CardWrap>*/}
			<CardWrap sx={{ padding: { md: "35px", xs: "20px" } }}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<FormControlLabel sx={{ "& span": { fontSize: "12px", color: "rgba(7, 14, 57, 0.75)", marginLeft: "10px" } }} control={
						<Checkbox sx={{ color: "#1890ff" }} width="14px" height="14px" name="accept" value="yes" />
					} label="I accept the Terms and Conditions of Yayfly.com and I confirm that the information provided is up to date and accurate." />
				</Box>
			</CardWrap>
			<Box sx={{ paddingBottom: "20px" }}>
				<Link onClick={(e) => { click(e, 'confirm') }} to="#" className="booking-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", width: "100%", maxWidth: "355px", fontSize: "20px", height: "52px", boxShadow: "none", background: "#12172A", textAlign: "center", lineHeight: "52px", textDecoration: "none", color: "#fff", borderRadius: "5px", fontWeight: 500, marginLeft: "auto" }}>
					Proceed to confirmation <IoIosAirplane />
				</Link>
			</Box>
		</Box>
  	);
};


export default PersonApplyCard;
