import React from "react";
import { Link } from "react-router-dom";
import CtaCard from "../../components/CtaCard";
import ProgressBar from "../../components/ProgressBar";
import SearchPriceResults from "../../components/SearchPriceResults";
import TopSeachForm from "../../components/TopSeachForm";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="container">
        Home page
        <Link to="/booking-details">Booking Details</Link>
        <Link to="/confirm-booking">Confirm Booking</Link>
        <Link to="/payment">Payment</Link>
      </div>
      <TopSeachForm></TopSeachForm>
      <CtaCard></CtaCard>
      <ProgressBar></ProgressBar>
      <SearchPriceResults></SearchPriceResults>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
