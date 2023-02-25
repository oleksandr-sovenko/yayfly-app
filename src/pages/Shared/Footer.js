import React from 'react';
import logo from '../../assets/yayfly.svg';

const Footer = () => {
    return (
        <footer className='footer'>
          <div className="container d-flex align-item">
            <div className="logo">
                <img src={logo} alt="yayfly" />
            </div>
            <div className="copyright"><p>Copyright © 2023 yay fly, inc. All rights reserved.</p></div>
          </div>
        </footer>
    );
};

export default Footer;