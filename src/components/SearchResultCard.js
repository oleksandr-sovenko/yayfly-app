import React, { useEffect, useRef, useState } from 'react';
import { CgAirplane } from 'react-icons/cg';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MdOutlineError } from 'react-icons/md';
import { Link } from 'react-router-dom';
import image1 from '../assets/AA.webp';
import image2 from '../assets/BA.webp';
import { getSettings, getNormalDuration } from '../functions';
import { Grid } from "@mui/material";
import moment from 'moment';


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
                            passengers: [{ cabin_class_marketing_name: '' }]
                        }]
                    },{
                        duration: '00:00',
                        origin: { iata_code: 'AAA' },
                        destination: { iata_code: 'BBB' },
                        segments:[{
                            departing_at:'00:00',
                            arriving_at:'00:00',
                            passengers: [{ cabin_class_marketing_name: '' }]
                        }]
                    }
                ]
            }
        };

    let cabinClass = '-';

    try {
        cabinClass = props.offer.slices[0].segments[0].passengers[0].cabin_class_marketing_name;
    } catch(e) {

    }        

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

    const settings = getSettings();

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
                    <div className="flight-category">{cabinClass}</div>
                </div>

                {props.offer.slices.map((slice, index) => {
                    const departureTime = slice.segments[0].departing_at,
                          arrivalTime = slice.segments[0].arriving_at;

                    return (
                        <div key={index} className="single-flight-time">
                            <div className="departureTimeWrap">
                                <span className='departureTime'>{moment(departureTime).format('hh:mm A')}</span>
                                <span className='airportCode'>{slice.origin.iata_code}</span>
                            </div>
                            <div className="flightDurationWrap">
                                <span className="totalFlightDuration">{getNormalDuration(slice.duration)}</span>
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
                                <span className="arrivalTime">{moment(arrivalTime).format('hh:mm A')}</span>
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

                {settings.unpublished_deal_detected && settings.unpublished_deal_detected.show_on && settings.unpublished_deal_detected.show_on.search ? (
                    <>
                        <span className="info-btn"><MdOutlineError />Unpublished deal detected</span>
                        <div className="cta-info">
                            <p>Call now to secure <br/>the best fare <HiArrowLongRight /></p>
                            <a href={`tel:${settings.unpublished_deal_detected.phone}`}><FaPhoneAlt /> {settings.unpublished_deal_detected.phone}</a>
                        </div>
                    </>
                ) : (<></>)}

                <div className='mobileName' ref={dropdownRef}>
                    <button className="dropdown-btn" onClick={handleDropdownToggle}><HiOutlineArrowSmDown /></button>
                </div>
            </div>
            <div className={`flight-fare-details ${isOpen ? "open" : ""}`}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} sm={4} spacing={1}>
                        <div className="travelLegTitle">Outbound <small>{moment(props.offer.slices[0].segments[0].departing_at).format('ddd, DD MMM')}</small></div>
                        <div style={{ width: '100%' }}>
                            <div className="arrives">Arrives:<br/>
                                <small>{moment(props.offer.slices[0].segments[props.offer.slices[0].segments.length - 1].arriving_at).format('ddd DD MMM')}</small></div>
                                <div className="totalDuration">Total duration: <small>{getNormalDuration(props.offer.slices[0].duration)}</small>
                            </div>
                        </div>

                        {props.offer.slices[0].segments.map((segment, index) => {
                            if (segment.operating_carrier)
                                return (
                                    <div key={index} className="flight-item">
                                        <div key={`${index}a`} className="airlineInfo">
                                            <img width="24" src={segment.operating_carrier.logo_symbol_url} /> {segment.operating_carrier.name}
                                        </div>
                                        <div key={`${index}b`}>
                                            <small>{moment(segment.departing_at).format('hh:mm A')}, {segment.origin.iata_code}</small><br/>
                                            <small>{moment(segment.arriving_at).format('hh:mm A')}, {segment.destination.iata_code}</small><br/>
                                            <small>{getNormalDuration(segment.duration)}</small>
                                        </div>
                                    </div>
                                )
                        })}
                    </Grid>
                    <Grid container item xs={12} sm={4} spacing={1}>
                        {props.offer.slices[1] ? (
                            <>
                                <div className="travelLegTitle">Return <small>{moment(props.offer.slices[1].segments[0].departing_at).format('ddd, DD MMM')}</small></div>
                                <div>
                                    <div className="arrives">Arrives:<br/>
                                        <small>{moment(props.offer.slices[1].segments[props.offer.slices[1].segments.length - 1].arriving_at).format('ddd, DD MMM')}</small>
                                    </div>
                                    <div className="totalDuration">Total duration: <small>{getNormalDuration(props.offer.slices[1].duration)}</small></div>
                                </div>

                                {props.offer.slices[1].segments.map((segment, index) => {
                                    if (segment.operating_carrier)
                                        return (
                                            <div key={index} className="flight-item">
                                                <div key={`${index}a`} className="airlineInfo">
                                                    <img width="24" src={segment.operating_carrier.logo_symbol_url} /> {segment.operating_carrier.name}
                                                </div>
                                                <div key={`${index}b`}>
                                                    <small>{moment(segment.departing_at).format('hh:mm A')}, {segment.origin.iata_code}</small><br/>
                                                    <small>{moment(segment.arriving_at).format('hh:mm A')}, {segment.destination.iata_code}</small><br/>
                                                    <small>{getNormalDuration(segment.duration)}</small>
                                                </div>
                                            </div>
                                        )
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid container item xs={12} sm={4} spacing={1}>
                        <div className="airfare">
                            Airfare <small style={{ float: 'right' }}>${props.offer.total_amount}</small>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default SearchResultCard;