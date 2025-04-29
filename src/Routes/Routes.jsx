import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import MangeItems from "../Pages/Dashboard/MangeItems/MangeItems";




export const router = createBrowserRouter([
    {
    path:"/",
    element:<Main></Main>,
    children:[
        {
        path:'/',
        element:<Home></Home>
    },{
        path:'/menu',
        element:<Menu></Menu>
    },{
        path:'/order/:category',
        element:<Order></Order>
    },{
        path: '/login',
        element:<Login></Login>
    },{
        path:'/signup',
        element:<SignUp></SignUp>
    },{
        path:'/secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
    }]
},{
    path:'/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
        {
        path:'/dashboard/cart',
        element:<Cart></Cart>
    },
    // admin routes
    {
        path: '/dashboard/addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
    },
    
    {
        path: '/dashboard/allUsers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    },{
        path: '/dashboard/manageItems',
        element:<AdminRoute><MangeItems></MangeItems></AdminRoute>
    }
]
}

]) ;