import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Home from "../../components/MainPages/Home/Home";
import Login from "../../components/MainPages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;