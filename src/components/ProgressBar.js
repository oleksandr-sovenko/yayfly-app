import React from 'react';
import loading from '../assets/loading.svg';

const ProgressBar = () => {
    return (
        <div className="progress-bar-area">
            <div className='container'>
                <p><img src={loading} /> Checking best prices... </p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar w-75"></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;