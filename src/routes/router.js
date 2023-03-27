import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Confirmation from "../pages/Confirmation/Confirmation";
import BookingDetails from "../pages/ConfirmBooking/BookingDetails";

import Search from "../pages/Search/Search";
import Payment from "../pages/Payment/Payment";


const settings = (window.flights_engine && window.flights_engine.settings) ? window.flights_engine.settings : {};


const router = createBrowserRouter([{
    path: "/",
    element: <Main />,
    errorElement:<div style={{ margin: '50px auto', width: '60%', background: 'white', padding: '20px', borderRadius: '5px' }}>Sorry, something went wrong. Our 24/7 airline booking agents can help you locate the flight you’re looking for now. Call Now: <a href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`}>{settings.phone}</a></div>,
    children: [{
        path: "/search/*",
        element: <Search />,
    }, {
        path: "/booking-details/*",
        element: <BookingDetails />,
    }, {
        path: "/confirm-booking/*",
        element: <Confirmation />,
    }, {
        path: "/payment/*",
        element: <Payment />,
    }],
}]);


export default router;
