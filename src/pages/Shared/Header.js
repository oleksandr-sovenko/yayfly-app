import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/yayfly.svg";


const Header = () => {
    const settings = (window.flights_engine && window.flights_engine.settings) ? window.flights_engine.settings : {};

    return (
        <div className="header">
            <div className="container grid grid-column align-item">
                <div className="logo">
                    <Link to="#" onClick={((e) => {
                        e.preventDefault();

                        window.location.href = window.flights_engine.url;
                    })}>
                        {" "}
                        {settings.logo && settings.logo.url ? (
                            <img src={settings.logo.url} alt="" />
                        ) : (
                            <img src={logo} alt="" />
                        )}    
                    </Link>
                    <div>
                        <span>EXCLUSIVE <br/>PHONE DEALS</span>
                        <a href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`}><span><FaPhoneAlt /></span></a>
                    </div>
                </div>
                <div className="header-right">
                    <div>
                        <p><strong>Save even more.</strong> Talk to our booking expert now.</p>
                        <span>Agent is available now</span>
                    </div>
                    <a href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`}>
                        <FaPhoneAlt /> {settings.phone}
                    </a>
                </div>
            </div>
        </div>
    );
};


export default Header;
