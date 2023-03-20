import React, { useEffect, useRef, useState } from "react";
import { getParams } from '../functions';
import { CgAirplane } from "react-icons/cg";
import moment from 'moment';

const TopSeachForm = (props) => {
    if (!props)
        props = {};

    console.log(getParams());

    const click = (e) => {
        e.preventDefault();

        const el = e.target;

        if (el.type === 'submit') {
            const params = getParams(),
                  depart = moment(document.querySelector('[name="depart"]').value).format('YYYY-MM-DD'),
                  returnn = moment(document.querySelector('[name="return"]').value).format('YYYY-MM-DD');

            window.location.href = 
                `/search/${params.type}/${document.querySelector('[name="origin"]').value},${document.querySelector('[name="destination"]').value},` +
                `${depart},${returnn}/` +
                `${window.travelers.cabinClass}/${window.travelers.adults}/${window.travelers.children}/${window.travelers.infants}`;
        }
    };

    const input = (e) => {
        const el = e.target;
    };

    const change = (e) => {
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
                            <input className="form-control" name="depart" defaultValue={props.depart ? moment(props.depart).format('MM/DD/YYYY') : ''} />
                        </div>
                        {props.type === 'round-trip' ? (
                            <div className="form-group field">
                                <label htmlFor="return">Return</label>
                                <input className="form-control" name="return" defaultValue={props.return ? moment(props.return).format('MM/DD/YYYY') : ''} />
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
