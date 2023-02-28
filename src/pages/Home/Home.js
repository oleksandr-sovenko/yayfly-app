import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="container">
        Home page
        <Link to="/booking-details">Booking Details</Link>
        <Link to="/confirm-booking">Confirm Booking</Link>
      </div> 
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
