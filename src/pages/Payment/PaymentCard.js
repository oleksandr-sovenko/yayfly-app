import CheckIcon from "@mui/icons-material/Check";
import { Box, Grid, styled, Typography, Dialog } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardPayment } from '@duffel/components'
import paymentImg from "../../assets/confirm-booking/payment.png";
import loadingImage from '../../assets/loading.svg';
import ThankYouModal from "../../components/Modal/ThankYouModal";
import { getSeatsData, localStorageJSON, getError } from "../../functions";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
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
          [errors, setErrors] = useState([]),
          offer = props.offer ? props.offer : {},
          passengers = props.passengers ? props.passengers : [],
          contactDetails = props.contactDetails ? props.contactDetails : {},
          additionalBaggage = props.additionalBaggage ? props.additionalBaggage : [],
          seats = props.seats ? props.seats : {},
          seatsData = getSeatsData(offer, seats);

    const orderData = localStorageJSON('order'),
          linkRestart = localStorage['linkRestart'] ? localStorage['linkRestart'] : window.flights_engine.url;

    useEffect(() => {
        if (!orderData.id) {
            order((result) => {
                if (result.data) {
                    localStorage['order'] = JSON.stringify(result.data);

                    axios.get(`${window.flights_engine.url}api/payments/intent?amount=${result.data.total_amount}`).then((response) => {
                        const result = response.data.data;

                        setIntent({ id: result.id, token: result.client_token });
                    });                
                } else if (result.errors) {
                    let errors = [];

                    for (const error of result.errors) {
                        errors.push(getError(error));

                        if (error.code === 'offer_request_already_booked')
                            break;
                    }

                    setErrors(errors);
                } else {
                    console.log(result);
                }
            })            
        } else {
            axios.get(`${window.flights_engine.url}api/payments/intent?amount=${orderData.total_amount}`).then((response) => {
                const result = response.data.data;

                setIntent({ id: result.id, token: result.client_token });
            }); 
        }

        return () => {

        };
    }, []);


    let additionalBaggageData = {
            count: 0,
            total_amount: 0,
        };

    for (const item of Object.values(additionalBaggage)) {
        let total_amount = parseFloat(item.total_amount);

        if (isNaN(total_amount))
            total_amount = 0;

        additionalBaggageData.count++;
        additionalBaggageData.total_amount += total_amount;
    }

    if (offer.total_amount)
        offer.total_amount = parseFloat(offer.total_amount);

    /**
     * 
     */
    const success = () => {
        axios.post(`${window.flights_engine.url}api/payments/intent/confirm/${intent.id}`).then((response) => {
            const result = response.data.data;
            setStatus(result.status);
            localStorage.removeItem('order');
        }).catch((error) => {
            setStatus('error');
        });
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
            amount: parseFloat(offer.base_amount) + parseFloat(offer.tax_amount),
        };

        for (const item of additionalBaggage) {
            let amount = parseFloat(item.total_amount);

            data.amount += isNaN(amount) ? 0 : amount;
            data.services.push(item);
        }

        for (const items of Object.values(seatsData.passengers)) {
            for (const item of items) {
                let amount = parseFloat(item.service.total_amount);

                data.amount += isNaN(amount) ? 0 : amount;
                data.services.push({
                    id: item.service.id,
                    metadata: item.service.metadata,
                    passenger_ids: [item.service.passenger_id],
                    quantity: 1,
                    // segment_ids: [segID],
                    total_amount: item.service.total_amount,
                    total_currency: item.service.total_currency,
                    type: 'seat'
                });
            }
        }

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

        axios.post(`${window.flights_engine.url}api/order/create`, data).then((response) => {
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
            {errors.length ? (
                <Dialog open={true}>
                    <div style={{ padding: '30px' }}>
                        {errors.map((error) => {
                            return (
                                <p>{error}</p>
                            )
                        })}

                        <div style={{ textAlign: 'center' }}>
                            <a href={linkRestart}>Restart</a>
                        </div>
                    </div>
                </Dialog>
            ) : (
                <></>
            )}

            {status === 'succeeded' ? (
                <ThankYouModal />
            ) : (
                <></>
            )}

            {status === 'initialized' ? (
                <>
                    <SectionTitle title="Your Payment Details"/>
                    <CardWrap sx={{ marginTop: { md: "20px", xs: "20px" }, boxShadow: { md: "rgb(101 101 101 / 5%) 4px 4px 12px", xs: "none" } }}>
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ gridAutoFlow: "dense" }}>
                            <Box sx={{ order: { md: "inherit", xs: 2 }, gridColumn: { md: "span 7", xs: "span 12" }, padding: { md: "20px 0px 0px 35px", xs: "20px 10px 20px 10px" } }}>
                                <Box sx={{ display: "flex", alignItems: "center", margin: "15px 0", "& > span": { padding: "0px" } }}>
                                    <Checkbox width="14px" height="14px" name="accept" value="yes" />
                                    <Typography sx={{ color: "#12172A", marginLeft: "10px", "& a": { color: "#1B40A6", textDecoration: "none" } }}>
                                        I accept Yay <Link to={`${window.flights_engine.url}terms-and-conditions`} target="_blank">Fly’s terms & conditions.</Link>
                                    </Typography>
                                </Box>
                                <Box>
                                    {intent ? (
                                        <CardPayment
                                            duffelPaymentIntentClientToken={intent.token}
                                            successfulPaymentHandler={success}
                                            errorPaymentHandler={error}
                                        />
                                    ) : (
                                        <>
                                            <div style={{ position: 'relative', marginTop: 30, border: '1px solid #d1d4e3', borderRadius: 5, padding: 15 }}>
                                                <img src={loadingImage} alt="" style={{ animation: 'rotation 2s infinite linear' }} />
                                                <span style={{ position: 'absolute', left: 50 }}>Preparing form for payment ...</span>
                                            </div>
                                        </>
                                    )}
                                </Box>
                            </Box>
                            <Box sx={{ gridColumn: { md: "span 5", xs: "span 12" }, background: { md: "none", xs: "#F2F3F7" }, padding: { md: "20px 35px 20px 0px", xs: "0px" }, marginBottom: { xs: "-35px", md: "0px" } }}>
                                <Box sx={{ width: "100%", background: { xs: "#E1F6F1", md: "none" }, padding: { xs: "40px 15px 40px", md: "0px" } }}>
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
                    </CardWrap>
                </>
            ) : (
                <></>
            )}
        </>
    );
};


export default PaymentCard;
