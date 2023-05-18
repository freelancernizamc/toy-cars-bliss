import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import Blogs from "../components/Blogs/Blogs";
import AddaToy from "../components/AddaToy/AddaToy";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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