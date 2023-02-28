import React from 'react';
import image1 from '../assets/AA.webp';
import image2 from '../assets/BA.webp';


const ConformSearchResult = () => {
    return (
        <div className="search-result-card-grid">
            <div className="flight-duration-time ConformSearchGrid">
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
        </div>
    );
};

export default ConformSearchResult;