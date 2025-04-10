
import { createBrowserRouter } from "react-router-dom";
import Account from "./pages/Account";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/Login";
import UserInfo from "./pages/userInfo"

import Flights from "./pages/flights";
import Help from "./pages/Help"
import History from "./pages/History";
import Stories from "./pages/stories";
import Signup from "./pages/Signup";
import Hotel from "./pages/hotel";
import HotelFlow11 from "./Components/HotelFlow/HotelFlow_11";





const router = createBrowserRouter ([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"",
                element: <Home />
            },
            {
                path:"/flights",
                element: <Flights />
            },
            {
                path:"/stories",
                element: <Stories />
            },
            {
                path:"/stories",
                element: <Stories />
            },
            {
                path:"/hotels",
                element: <Hotel />
            },
            {
                path:"/help",
                element: <Help />
            },
           
            {
                path:"/user/user_info",
                element: <Account />,
                children:[
                    {
                        path:"",
                        element:<UserInfo/>
                    },
                    {
                        path:"user_history",
                        element:<History/>
                    },
                ]
            },
           
            {
                path:"login",
                element: <Login />
            },
            {
                path:"signup",
                element: <Signup />
            },
            {
                path:"hotelFlow11",
                element:<HotelFlow11/>

            }

            
        ]
    }
])
export default router

