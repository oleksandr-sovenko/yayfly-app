import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Confirmation from "../pages/Confirmation/Confirmation";
import BookingDetails from "../pages/ConfirmBooking/BookingDetails";

import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    ],
  },
]);

export default router;
