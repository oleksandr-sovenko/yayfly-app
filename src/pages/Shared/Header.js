import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../../assets/yayfly.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className="container grid grid-column align-item">
                <div className="logo">
                    <img src={logo} alt="yayfly" />
                </div>
                <div className="header-right">
                    <div>
                        <p><strong>Save even more.</strong> Talk to our booking expert now.</p>
                        <span>Agent is available now</span>
                    </div>
                    <a href="tel:8882112111"><span><FaPhoneAlt /> </span> (888) 211.2111</a>

                </div>
            </div>
        </div>
    );
};

export default Header;