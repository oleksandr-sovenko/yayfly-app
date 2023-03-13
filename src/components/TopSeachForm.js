import React, { useEffect, useRef, useState } from "react";
import { CgAirplane } from "react-icons/cg";

const TopSeachForm = (props) => {
    if (!props)
        props = {};

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

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

    const handleAdultsIncrement = () => {
        if (adults < 7) {
            setAdults((prevAdults) => prevAdults + 1);
        }
    };

    const handleAdultsDecrement = () => {
        if (adults > 1) {
            setAdults((prevAdults) => prevAdults - 1);
        }
    };

    const handleChildrenIncrement = () => {
        if (children < 7) {
            setChildren((prevChildren) => prevChildren + 1);
        }
    };

    const handleChildrenDecrement = () => {
        if (children > 0) {
            setChildren((prevChildren) => prevChildren - 1);
        }
    };

    const handleInfantsIncrement = () => {
        if (infants < 7) {
            setInfants((prevInfants) => prevInfants + 1);
        }
    };

    const handleInfantsDecrement = () => {
        if (infants > 0) {
            setInfants((prevInfants) => prevInfants - 1);
        }
    };

    return (
        <div className="top-search">
            <div className="container">
                <form action="#" className="search-form">
                    <div className="inline-flex">
                        <div className="form-group">
                            <select name="flight" id="flightType">
                                <option value="economy">Economy</option>
                                <option value="premium-economy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first-class">First Class</option>
                            </select>
                        </div>
                        <div className="form-group" ref={dropdownRef}>
                            <div className="dropdown-toggle" onClick={handleDropdownToggle}>
                                Adults 1
                                <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                                    <div className="passenger-input">
                                        <label htmlFor="adults">Adults</label>
                                        <div className="passenger-count">
                                            <button onClick={handleAdultsDecrement}>-</button>
                                            <input type="number" id="adults" name="adults" value={adults} onChange={(e) => setAdults(e.target.value)} min="1" max="7" />
                                            <button onClick={handleAdultsIncrement}>+</button>
                                        </div>
                                    </div>
                                    <div className="passenger-input">
                                        <label htmlFor="children">Children</label>
                                        <div className="passenger-count">
                                            <button onClick={handleChildrenDecrement}>-</button>
                                            <input type="number" id="children" name="children" value={children} onChange={(e) => setChildren(e.target.value)} min="0" max="7" />
                                            <button onClick={handleChildrenIncrement}>+</button>
                                        </div>
                                    </div>
                                    <div className="passenger-input">
                                        <label htmlFor="infants">Infants</label>
                                        <div className="passenger-count">
                                            <button onClick={handleInfantsDecrement}>-</button>
                                            <input type="number" id="infants" name="infants" value={infants} onChange={(e) => setInfants(e.target.value)} min="0" max="7" />
                                            <button onClick={handleInfantsIncrement}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={props.type === 'round-trip' ? 'grid column-rand mt-5' : 'grid column-rand column-rand-4 mt-5'}>
                        <div className="form-group field">
                            <label htmlFor="flyingFrom">Flying from</label>
                            <input className="form-control" type="text" id="flyingFrom" placeholder="Airport or city" />
                        </div>
                        <div className="form-group field">
                            <label htmlFor="flyingTo">Flying to</label>
                            <input className="form-control" type="text" id="flyingTo" placeholder="Airport or city" />
                        </div>
                        <div className="form-group field">
                            <label htmlFor="depart">Depart</label>
                            <input className="form-control" type="date" id="depart" />
                        </div>
                        {props.type === 'round-trip' ? (
                            <div className="form-group field">
                                <label htmlFor="return">Return</label>
                                <input className="form-control" type="date" id="return" />
                            </div>                            
                        ) : (
                            <></>
                        )}

                        <button type="submit">
                            Search <CgAirplane />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TopSeachForm;
