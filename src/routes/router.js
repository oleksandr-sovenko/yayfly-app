import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ConfirmBooking from "../pages/ConfirmBooking/ConfirmBooking";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<div>Error page</div>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/confirm-booking',
                element:<ConfirmBooking/>
            }
        ]
    }
]);

export default router;