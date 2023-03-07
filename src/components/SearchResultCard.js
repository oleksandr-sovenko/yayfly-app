import React, { useEffect, useRef, useState } from 'react';
import { CgAirplane } from 'react-icons/cg';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MdOutlineError } from 'react-icons/md';
import { Link } from 'react-router-dom';
import image1 from '../assets/AA.webp';
import image2 from '../assets/BA.webp';


const SearchResultCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);
    
    const handleDropdownToggle = () => {
        setIsOpen((prevState) => !prevState);
    };


    return (
        <div className="search-result-card-grid">
            <div className="flight-duration-time">
                <div className="flight-header">
                    <div className="flight-name">
                        <img src={image1} alt="American Airlines" />
                        <img src={image2} alt="British Airways" />
                        <span className="airlineName">British Airways</span>
                    </div>
                    <div className="flight-category">Economy</div>
                </div>
                <div className="single-flight-time">
                    <div className="departureTimeWrap">
                        <span className='departureTime'>19:30</span>
                        <span className='airportCode'>LHR</span>
                    </div>
                    <div className="flightDurationWrap">
                        <span className="totalFlightDuration">8h 0min</span>
                        <span className="lineAndDots"></span>
                        <span className="directFlight">Direct</span>
                    </div>
                    <div className="arrivalTimeWrap">
                        <span className="arrivalTime">22:30</span>
                        <span className="airportCodeTo">JFK</span>
                    </div>
                </div>

                <div className="single-flight-time">
                    <div className="departureTimeWrap">
                        <span className='departureTime'>19:30</span>
                        <span className='airportCode'>LHR</span>
                    </div>
                    <div className="flightDurationWrap">
                        <span className="totalFlightDuration">8h 0min</span>
                        <span className="lineAndDots"></span>
                        <span className="directFlight">Direct</span>
                    </div>
                    <div className="arrivalTimeWrap">
                        <span className="arrivalTime">22:30</span>
                        <span className="airportCodeTo">JFK</span>
                    </div>
                </div>
            </div>
            <div className="flight-price-wrap">
                <div className="mobileFlex">
                    <div>
                        <span className="desktop-none">Total:</span>
                        <div className="price">$2359.00</div>
                    </div>
                    <div>
                        <div ref={dropdownRef} className="desktopNone">
                            <button className="dropdown-btn" onClick={handleDropdownToggle}><HiOutlineArrowSmDown /></button>
                        </div>
                        <Link to="/booking-details" className="addToCart">Select <CgAirplane /></Link>
                    </div>
                </div>
                <span className="info-btn"><MdOutlineError />Unpublished deal detected</span>
                <div className="cta-info">
                    <p>Call now to secure <br/>the best fare <HiArrowLongRight /></p>
                    <a href="tel:8882112111"><FaPhoneAlt /> (888) 211.2111</a>
                </div>
                <div className='mobileName' ref={dropdownRef}>
                    <button className="dropdown-btn" onClick={handleDropdownToggle}><HiOutlineArrowSmDown /></button>
                </div>
            </div>
            <div className={`flight-fare-details ${isOpen ? "open" : ""}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, magni quod nisi voluptatum commodi doloribus obcaecati alias nihil earum deleniti repellat! Vitae velit molestias natus enim nobis voluptas perspiciatis placeat.</div>
        </div>
    );
};

export default SearchResultCard;