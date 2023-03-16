import React, { useEffect, useRef, useState } from "react";
import { getParams } from '../functions';
import { CgAirplane } from "react-icons/cg";

const TopSeachForm = (props) => {
    if (!props)
        props = {};

    const click = (e) => {
        e.preventDefault();

        const el = e.target;

        if (el.type === 'submit') {
            const params = getParams();

            window.location.href = `/search/${params.type}/${document.querySelector('[name="origin"]').value},${document.querySelector('[name="destination"]').value},${document.querySelector('[name="depart"]').value},${document.querySelector('[name="return"]').value}/${params.cabinClass}/${params.adults}/${params.children}/${params.infants}`;

            // https://yayfly.com/search/round-trip/GDO,ASD,2023-03-13,2023-03-13/economy/1/0/0?luggage=true&layover=true
            // https://yayfly.com/search/one-way/GDO,ASD,2023-03-13/economy/1/0/0?luggage=true&layover=true
            // https://yayfly.com/search/multi-city/GDO,ASD,2023-03-13;ASD,GDO,2023-03-14/economy/1/0/0?luggage=true&layover=true
        }
    };

    const input = (e) => {
        const el = e.target;

        // if (el.name === 'origin')
        //     setOrigin(el.value);

        // if (el.name === 'destination')
        //     setDestination(el.value);
    };

    const change = (e) => {
        // const el = e.target;

        // if (el.name === 'depart')
        //     setDepart(el.value);

        // if (el.name === 'return')
        //     setReturn(el.value);
    };

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
                            <input className="form-control" type="text" placeholder="Airport or city" name="origin" defaultValue={props.origin ? props.origin : ''} />
                        </div>
                        <div className="form-group field" style={{ position: 'relative' }}>
                            <label htmlFor="destination">Flying to</label>
                            <input className="form-control" type="text" placeholder="Airport or city" name="destination" defaultValue={props.destination ? props.destination : ''} />
                        </div>
                        <div className="form-group field">
                            <label htmlFor="depart">Depart</label>
                            <input className="form-control" name="depart" defaultValue={props.depart ? props.depart : ''} />
                        </div>
                        {props.type === 'round-trip' ? (
                            <div className="form-group field">
                                <label htmlFor="return">Return</label>
                                <input className="form-control" name="return" defaultValue={props.return ? props.return : ''} />
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
