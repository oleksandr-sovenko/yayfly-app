import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Confirmation from "../pages/Confirmation/Confirmation";
import BookingDetails from "../pages/ConfirmBooking/BookingDetails";

import Home from "../pages/Home/Home";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>Error page</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking-details",
        element: <BookingDetails />,
      },
      {
        path: "/confirm-booking",
        element: <Confirmation />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
