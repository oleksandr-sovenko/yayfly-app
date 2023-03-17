import React, { useEffect, useRef, useState } from 'react';
import { CgAirplane } from 'react-icons/cg';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MdOutlineError } from 'react-icons/md';
import { Link } from 'react-router-dom';
import image1 from '../assets/AA.webp';
import image2 from '../assets/BA.webp';


const SearchResultCard = (props) => {
    if (!props.offer)
        props = {
            loading: true,
            offer: {
                owner: {
                    logo_symbol_url: '',
                    name: 'dummyText',
                },
                slices: [{
                        duration: '00:00',
                        origin: { iata_code: 'AAA' },
                        destination: { iata_code: 'BBB' },
                        segments:[{
                            departing_at:'00:00',
                            arriving_at:'00:00',
                        }]
                    },{
                        duration: '00:00',
                        origin: { iata_code: 'AAA' },
                        destination: { iata_code: 'BBB' },
                        segments:[{
                            departing_at:'00:00',
                            arriving_at:'00:00',
                        }]
                    }
                ]
            }
        };

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    
    const handleDropdownToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    if (!props.offer.carriers)
        props.offer.carriers = [];

    return (
        <div className={props.loading === true ? 'search-result-card-grid loading' : 'search-result-card-grid'}>
            <div className="flight-duration-time">
                <div className="flight-header">
                    <div className="flight-name">
                        {Object.keys(props.offer.carriers).map((name, index) => {
                            return (
                                <img key={index} src={props.offer.carriers[name]} alt={name} />    
                            )
                        })}
                        <span className="airlineName">{props.offer.owner.name}</span>
                    </div>
                    <div className="flight-category">Economy 111</div>
                </div>

                {props.offer.slices.map((slice, index) => {
                    return (
                        <div key={index} className="single-flight-time">
                            <div className="departureTimeWrap">
                                <span className='departureTime'>{slice.segments[0].departing_at.replace(/.*T/, '').substr(0, 5)}</span>
                                <span className='airportCode'>{slice.origin.iata_code}</span>
                            </div>
                            <div className="flightDurationWrap">
                                <span className="totalFlightDuration">{slice.duration.replace('P1DT', '1d ').replace('PT', '').replace('H', 'h ').replace('M', 'min')}</span>
                                <span className="lineAndDots"></span>
                                {slice.segments.length === 1 ? (
                                    <span className="directFlight">Direct</span>
                                ) : (
                                    <span className="directFlight" style={{ color: '#cd363a' }}>
                                        {slice.segments.length <= 2 ? (
                                            <>{slice.segments.length - 1} stop</>
                                        ) : (
                                            <>{slice.segments.length - 1} stops</>
                                        )}
                                    </span>
                                )}
                            </div>
                            <div className="arrivalTimeWrap">
                                <span className="arrivalTime">{slice.segments[slice.segments.length - 1].arriving_at.replace(/.*T/, '').substr(0, 5)}</span>
                                <span className="airportCodeTo">{slice.destination.iata_code}</span>
                            </div>
                        </div>                        
                    )
                })}
            </div>
            <div className="flight-price-wrap">
                <div className="mobileFlex">
                    <div>
                        <span className="desktop-none">Total:</span>
                        <div className="price">${props.offer.total_amount}</div>
                    </div>
                    <div>
                        <div ref={dropdownRef} className="desktopNone">
                            <button className="dropdown-btn" onClick={handleDropdownToggle}><HiOutlineArrowSmDown /></button>
                        </div>
                        <Link to={`/booking-details/${props.offer.id}`} className="addToCart">Select <CgAirplane /></Link>
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