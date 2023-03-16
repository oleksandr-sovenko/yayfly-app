import React, { useEffect, useRef, useState } from "react";
import { CgAirplane } from "react-icons/cg";

const TopSeachForm = (props) => {
    if (!props)
        props = {};

    const [isOpen, setIsOpen] = useState(false),
          [adults, setAdults] = useState(1),
          [children, setChildren] = useState(0),
          [infants, setInfants] = useState(0),
          dropdownRef = useRef(null);

    const [origin, setOrigin] = useState(props.origin ? props.origin : ''),
          [destination, setDestination] = useState(props.destination ? props.destination : ''),
          [depart, setDepart] = useState(props.depart ? props.depart : ''),
          [returnn, setReturn] = useState(props.return ? props.return : '');

    const click = (e) => {
        e.preventDefault();

        const el = e.target;

        if (el.type === 'submit') {
            console.log({
                origin: origin,
                destination: destination,
                depart: depart,
                return: returnn,
            })
        }
    };

    const input = (e) => {
        const el = e.target;

        if (el.name === 'origin')
            setOrigin(el.value);

        if (el.name === 'destination')
            setDestination(el.value);
    };

    const change = (e) => {
        const el = e.target;

        if (el.name === 'depart')
            setDepart(el.value);

        if (el.name === 'return')
            setReturn(el.value);
    };

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


    return (
        <div className="top-search">
            <div className="container">
                <form action="#" className="search-form">
                    <div className="inline-flex">
                        <div className="form-group form-group-cabin-travelers">
                            <div name="cabinClass">Economy</div>
                        </div>
                        <div className="form-group form-group-cabin-travelers">
                            <div name="travelers">1 Adult</div>
                        </div>
                    </div>

                    <div className={props.type === 'round-trip' ? 'grid column-rand mt-5' : 'grid column-rand column-rand-4 mt-5'}>
                        <div className="form-group field" style={{ position: 'relative' }}>
                            <label htmlFor="origin">Flying from</label>
                            <input className="form-control" type="text" id="origin" placeholder="Airport or city" name="origin" onInput={input} value={origin} />
                        </div>
                        <div className="form-group field" style={{ position: 'relative' }}>
                            <label htmlFor="destination">Flying to</label>
                            <input className="form-control" type="text" id="destination" placeholder="Airport or city" name="destination" onInput={input} value={destination} />
                        </div>
                        <div className="form-group field">
                            <label htmlFor="depart">Depart</label>
                            <input className="form-control" name="depart" onChange={change} value={depart} />
                        </div>
                        {props.type === 'round-trip' ? (
                            <div className="form-group field">
                                <label htmlFor="return">Return</label>
                                <input className="form-control" name="return" onChange={change} value={returnn} />
                            </div>                            
                        ) : (
                            <></>
                        )}

                        <button type="submit" onClick={click}>
                            Search <CgAirplane />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TopSeachForm;
