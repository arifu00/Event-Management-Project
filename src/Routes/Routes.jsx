import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/OurServices/OurServices";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ServiceDetail from "../Components/Service/ServiceDetail";
import OurServices from "../Pages/OurServices/OurServices";
import Contact from "../Components/ContactUs/Contact";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json'),
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: () => fetch('/services.json'),
                
                
            },
            {
                path: '/ourServices',
                element: <OurServices></OurServices>,
                loader: () => fetch('/services.json'),
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ],
    },
])

export default Routes;