import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import Blogs from "../components/Blogs/Blogs";
import AddaToy from "../components/AddaToy/AddaToy";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MyToys from "../components/MyToys/MyToys";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/alltoys',
                element: <AllToys />
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/addatoy',
                element: <AddaToy />,
            },
            {
                path: '/mytoys',
                element: <MyToys />
            },
            {
                path: '/toydetails',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
]);




export default router;