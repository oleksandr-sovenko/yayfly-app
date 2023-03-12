import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/yayfly.svg";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container grid grid-column align-item">
                <div className="logo">
                    <Link to="/">
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
    );
};


export default Footer;