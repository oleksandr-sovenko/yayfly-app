import React from 'react';
import PassengerCard from './PassengerCard';
import PersonApplyCard from './PersonApplyCard';

const ConfirmBooking = () => {
    return (
        <div className='booking-pages'>
            <div className="container">
                <PassengerCard/>
                <PersonApplyCard/>
            </div>
        </div>
    );
};

export default ConfirmBooking;