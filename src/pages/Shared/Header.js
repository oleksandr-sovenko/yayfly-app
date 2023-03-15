import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/yayfly.svg";


const Header = () => {
    return (
        <div className="header">
            <div className="container grid grid-column align-item">
                <div className="logo">
                    <Link to="#" onClick={((e) => {
                        e.preventDefault();

                        window.location.href = 'https://yayfly.com/';
                    })}>
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
                        <p><strong>Save even more.</strong> Talk to our booking expert now.</p>
                        <span>Agent is available now</span>
                    </div>
                    <a href="tel:8882112111">
                        <FaPhoneAlt /> (888) 211.2111
                    </a>
                </div>
            </div>
        </div>
    );
};


export default Header;
