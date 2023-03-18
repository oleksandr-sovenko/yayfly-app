import React from 'react';
import image1 from '../assets/AA.webp';
import image2 from '../assets/BA.webp';


const ConformSearchResult = (props) => {
    const offer = props.offer ? props.offer : {};

    let cabinClass = '-';

    try {
        if (
            offer.slices &&
            offer.slices[0].segments[0] &&
            offer.slices[0].segments[0].passengers[0] &&
            offer.slices[0].segments[0].passengers[0].cabin_class_marketing_name
        )
            cabinClass = offer.slices[0].segments[0].passengers[0].cabin_class_marketing_name;
    } catch(e) {

    }

    return (
        <div className="search-result-card-grid">
            <div className="flight-duration-time ConformSearchGrid">
                <div className="flight-header">
                    <div className="flight-name">
                        {offer.carriers ? (
                            Object.keys(offer.carriers).map((name, index) => {
                            return (
                                <img key={index} src={offer.carriers[name]} alt={name} />    
                            )
                        })) : (
                            <img src={offer.owner ? offer.owner.logo_symbol_url : ''} alt={offer.owner ? offer.owner.name : ''} />    
                        )}
                        <span className="airlineName">{offer.owner ? offer.owner.name : ''}</span>
                    </div>
                    <div className="flight-category">{cabinClass}</div>
                </div>
                {offer.slices ? offer.slices.map((slice, index)=> {
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
                }) : ''}
            </div>
        </div>
    );
};


export default ConformSearchResult;