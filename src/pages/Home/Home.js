import React from 'react';
import Booking from '../Booking/Booking';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Booking/>
            <Footer></Footer>
        </div>
    );
};

export default Home;