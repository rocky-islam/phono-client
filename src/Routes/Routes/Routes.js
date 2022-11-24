import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Blog from "../../components/MainPages/Blog/Blog";
import CategoryPage from "../../components/MainPages/CategoryPage/CategoryPage";
import ErrorPage from "../../components/MainPages/ErrorPage/ErrorPage";
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categories',
                element: <CategoryPage></CategoryPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;