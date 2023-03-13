import React from 'react';
import loading from '../assets/loading.svg';


const ProgressBar = (props) => {
    if (!props)
        props = { value: 0 };

    return (
        <div className="progress-bar-area">
            {props.value < 100 ? (
                <p><img src={loading} style={{ animation: 'rotation 2s infinite linear' }}/> Checking best prices... </p>
            ) : (
                <></>
            )}
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: `${props.value}%` }}></div>
            </div>
        </div>
    );
};


export default ProgressBar;