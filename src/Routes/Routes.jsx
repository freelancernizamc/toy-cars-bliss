import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import Blogs from "../components/Blogs/Blogs";
import AddaToy from "../components/AddaToy/AddaToy";

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
                element: <AddaToy />
            }
        ]
    },
]);




export default router;