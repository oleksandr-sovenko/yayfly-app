import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import logo from "../../assets/yayfly.svg";


const Footer = () => {
    const [isVisibleScrollTop, setVisibleScrollTop] = useState(false);

    document.addEventListener('scroll', (event) => {
        if (document.querySelector('html').scrollTop > 1500)
            setVisibleScrollTop(true);
        else
            setVisibleScrollTop(false);
    });

    return (
        <>
            <div id="scroll-top" className={isVisibleScrollTop ? 'show' : ''} onClick={() => { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }}>
                <FaAngleUp />
            </div>
            <footer className='footer'>
                <div className="container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ textAlign: { xs: 'center' }, marginTop: '15px', marginBottom: '15px', display: { xs: 'block', md: 'none' } }}>
                            <Link to="#" onClick={((e) => { e.preventDefault(); window.location.href = window.flights_engine.url })}>
                                <img src={logo} alt="yayFly" />
                            </Link>                        
                        </Grid>
                    </Grid>
                
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            Traveling is a wonderful experience, and we want you to have peace of mind when booking your tickets. We provide the best and the cheapest flight options without any advertisements or hidden fees, and our customer service is excellent. Our goal is to make your travel experience effortless and stress-free.
                        </Grid>
                        <Grid item md={3} xs={12} sx={{ paddingLeft: { md: "75px !important", xs: "0" } }}>
                            <h2>HELPFUL TOOLS</h2>
                            <ul>
                                <li><a href="https://yayfly.com/contact-us/">CONTACT US</a></li>
                                <li><a href="https://yayfly.com/airline-baggage-fees/">AIRLINE BAGGAGE POLICY</a></li>
                                <li><a href="https://yayfly.com/airline-telephone-numbers/">AIRLINE TELEPHONE NUMBERS</a></li>
                            </ul>
                        </Grid>
                        <Grid item md={3} xs={12} sx={{ paddingLeft: { md: "75px !important", xs: "0" } }}>
                            <h2>LEGAL</h2>
                            <ul>
                                <li><a href="https://yayfly.com/terms-and-conditions/">TERMS & CONDITIONS</a></li>
                                <li><a href="https://yayfly.com/privacy-policy/">PRIVACY POLICY</a></li>
                                <li><a href="https://yayfly.com/refund-cancellation/">REFUND & CANCELLATION</a></li>
                                <li><a href="https://yayfly.com/accessibility-contract/">ACCESSIBILITY POLICY</a></li>
                                <li><a href="https://yayfly.com/taxes-and-fees/">TAXES AND FEES</a></li>
                            </ul>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item md={2} xs={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Link to="#" onClick={((e) => { e.preventDefault(); window.location.href = window.flights_engine.url })}>
                                <img src={logo} alt="yayFly" />
                            </Link>                        
                        </Grid>
                        <Grid item md={10} xs={12} sx={{ textAlign: { xs: 'center', md: 'left' }, position: { xs: 'inherit', md: 'relative' }, paddingTop: { xs: '0', md: '30px !important' } }}>
                            <span>COPYRIGHT © 2023 YAY FLY, INC. ALL RIGHTS RESERVED.</span>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        </>
    );
};


export default Footer;