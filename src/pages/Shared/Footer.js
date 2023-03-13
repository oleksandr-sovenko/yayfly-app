import React, { useState } from "react";
import { FaPhoneAlt, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <a id="scroll-top" className={isVisibleScrollTop ? 'show' : ''} onClick={() => { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }}>
                <FaAngleUp />
            </a>
            <footer className='footer'>
                <div className="container grid grid-column align-item">
                    <div className="logo">
                        <Link to="https://yayfly.com/">
                            {" "}
                            <img src={logo} alt="yayFly" />
                        </Link>
                        <div>
                            <span>EXCLUSIVE <br/>PHONE DEALS</span>
                            <a href="tel:8882112111"><span><FaPhoneAlt /></span></a>
                        </div>
                    </div>
                    <div className="header-right">
                        <div>
                            <p>
                                <strong>Save even more.</strong> Talk to our booking expert now.
                            </p>
                            <span>Agent is available now</span>
                        </div>
                        <a href="tel:8882112111">
                            <FaPhoneAlt /> (888) 211.2111
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};


export default Footer;