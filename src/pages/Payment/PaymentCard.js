import CheckIcon from "@mui/icons-material/Check";
import { Box, Grid, styled, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardPayment } from '@duffel/components'
import paymentImg from "../../assets/confirm-booking/payment.png";
import ThankYouModal from "../../components/Modal/ThankYouModal";
import axios from 'axios';


const CardWrap = styled(Box)(({ theme }) => ({
    fontFamily: "'Public Sans', sans-serif",
    backgroundColor: "white",
    borderRadius: "5px",
    marginBottom: "30px",
    color: "rgb(0, 3, 23)",
}));


const PaymentCard = (props) => {
    const [intent, setIntent] = useState(null),
          [status, setStatus] = useState('initialized'),
          offer = props.offer ? props.offer : {},
          passengers = props.passengers ? props.passengers : [],
          contactDetails = props.contactDetails ? props.contactDetails : {};

    /**
     * 
     */
    const pay = (e) => {
        e.preventDefault();

        const el = e.target,
              that = this,
              page = el.closest('.payment-pages'),
              accept = page.querySelector('input[name="accept"]');

        if (accept.checked) {              
            order((result) => {
                if (result.data) {
                        axios.get(`https://yayfly.com/api/payments/intent?amount=${result.data.total_amount}`).then((response) => {
                            const result = response.data.data;

                            setIntent({ id: result.id, token: result.client_token });
                        });
                } if (result.errors) {
                    let errors = [];

                    for (const error of result.errors)
                        errors.push(error.title);

                    alert(errors.join('. '));
                } else {
                    console.log(result);
                }
            })
        } else {
            accept.closest('div').classList.add('error');

            setTimeout(() => {
                accept.closest('div').classList.remove('error');
            }, 1500);
        }            
    }

    /**
     * 
     */
    const success = () => {
        axios.post(`https://yayfly.com/api/payments/intent/confirm/${intent.id}`).then((response) => {
            const result = response.data.data;

            // console.log(response.data);
            // that.setState((state, props) => {
            //     state.result.payment = response.data;

            //     return state;
            // }, order);


            // if (result.status === 'succeeded');

            setStatus(result.status);

        }).catch((error) => {
            console.log(error);
            // alert('Payment! Something went wrong');
            setStatus('error');
        });

        // console.log('successfulPaymentHandler');
    }

    /**
     * 
     */
    const error = () => {
        console.log('errorPaymentHandler');
    }

    /**
     * 
     */
    const order = (callback) => {
        const data = {
            offer: { id: offer.id },
            passengers: [],
            services: [],
            amount: parseFloat(offer.total_amount),
        };

        // for (const item of props.AdditionalBaggages) {
        //     data.amount += parseFloat(item.total_amount);
        //     data.services.push(item);
        // }

        // for (const item of props.Seats) {
        //     data.amount += parseFloat(item.total_amount);
        //     data.services.push(item);
        // }

        for (const passenger of passengers) {
            let item = {
                id: passenger.id,
                title: 'mr',
                given_name: passenger.given_name,
                family_name: passenger.family_name,
                gender: passenger.gender,
                born_on: `${passenger.birth_year}-${passenger.birth_month}-${passenger.birth_day}`,
                email: contactDetails.email,
                phone_number: `+1${contactDetails.phone_number}`,
            };

            if (offer.passenger_identity_documents_required)
                item.identity_documents = [{
                    unique_identifier: passenger.passport_id,
                    type: 'passport',
                    issuing_country_code: passenger.nationality,
                    expires_on: `${passenger.passport_expiry_year}-${passenger.passport_expiry_month}-${passenger.passport_expiry_day}`                        
                }]

            data.passengers.push(item);
        }

        axios.post(`https://yayfly.com/api/order/create`, data).then((response) => {
            const result = response.data;

            if (typeof callback === 'function')
                callback(result);
        }).catch((error) => {
            if (typeof callback === 'function')
                callback(error);
        });
    };

    return (
        <>
            {status === 'succeeded' ? (
                <ThankYouModal />
            ) : (
                <></>
            )}

            {status === 'initialized' ? (
                <CardWrap sx={{ marginTop: { md: "20px", xs: "20px" }, boxShadow: { md: "rgb(101 101 101 / 5%) 4px 4px 12px", xs: "none" } }}>
                    {intent ? (
                        <div style={{ padding: '30px' }}>
                            <CardPayment
                                duffelPaymentIntentClientToken={intent.token}
                                successfulPaymentHandler={success}
                                errorPaymentHandler={error}
                            />
                        </div>
                    ) : (
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ gridAutoFlow: "dense" }}>
                            <Box sx={{ order: { md: "inherit", xs: 2 }, gridColumn: { md: "span 7", xs: "span 12" }, padding: { md: "20px 0px 0px 35px", xs: "20px 15px 0px" } }}>
                                <Box sx={{ display: "flex", alignItems: "center", margin: "20px 0", "& > span": { padding: "0px" } }}>
                                    <Checkbox width="14px" height="14px" name="accept" value="yes" />
                                    <Typography sx={{ color: "#12172A", marginLeft: "10px", "& a": { color: "#1B40A6", textDecoration: "none" } }}>
                                        I accept Yay <Link to="https://yayfly.com/terms-and-conditions/" target="_blank">Fly’s terms & conditions.</Link>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Link onClick={pay} to="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", width: "100%", maxWidth: "355px", fontSize: "20px", height: "52px", boxShadow: "none", background: "#12172A", textAlign: "center", lineHeight: "52px", textDecoration: "none", color: "#fff", borderRadius: "5px", fontWeight: 500 }}>
                                        Pay ${offer.total_amount ? offer.total_amount : 0}
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ gridColumn: { md: "span 5", xs: "span 12" }, background: { md: "none", xs: "#F2F3F7" }, padding: { md: "20px 35px 20px 0px", xs: "0px" }, marginBottom: { xs: "20px", md: "0px" } }}>
                                <Box sx={{ width: "100%", background: { xs: "#E1F6F1", md: "none" }, padding: { xs: "40px 15px 40px", md: "0px" }, marginBottom: { xs: "20px", md: "0px" } }}>
                                    <Box sx={{ display: "grid", gridTemplateColumns: "30px 1fr", marginBottom: "5px", "& svg": { color: "#000", fontSize: "16px", textAlign: "center", fontWeight: 700, height: "30px", width: "30px", display: "inline-block" } }}>
                                        <CheckIcon />
                                        <Typography sx={{ fontSize: "14px", lineHeight: "25px", marginLeft: "10px" }}>SSL secure transaction</Typography>
                                    </Box>
                                    <Box sx={{ display: "grid", gridTemplateColumns: "30px 1fr", marginBottom: "5px", "& svg": { color: "#000", fontSize: "16px", textAlign: "center", fontWeight: 700, height: "30px", width: "30px", display: "inline-block" } }}>
                                        <CheckIcon />
                                        <Typography sx={{ fontSize: "14px", lineHeight: "25px", marginLeft: "10px" }}>Pay securely using your debit or credit card</Typography>
                                    </Box>
                                    <Box sx={{ display: "grid", gridTemplateColumns: "30px 1fr", marginBottom: "5px", "& svg": { color: "#000", fontSize: "16px", textAlign: "center", fontWeight: 700, height: "30px", width: "30px", display: "inline-block" } }}>
                                        <CheckIcon />
                                        <Typography sx={{ fontSize: "14px", lineHeight: "25px", marginLeft: "10px" }}>Receive booking confirmation within 12 hours</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </CardWrap>
            ) : (
                <></>
            )}
        </>
    );
};


export default PaymentCard;
