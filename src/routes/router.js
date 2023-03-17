import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Confirmation from "../pages/Confirmation/Confirmation";
import BookingDetails from "../pages/ConfirmBooking/BookingDetails";

import Search from "../pages/Search/Search";
import Payment from "../pages/Payment/Payment";


const router = createBrowserRouter([{
    path: "/",
    element: <Main />,
    errorElement: <div>Error page</div>,
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
