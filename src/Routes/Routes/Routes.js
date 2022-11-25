import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Blog from "../../components/MainPages/Blog/Blog";
import Categories from "../../components/MainPages/CategoryPage/Categories/Categories";
import CategoryPage from "../../components/MainPages/CategoryPage/CategoryPage";
import ErrorPage from "../../components/MainPages/ErrorPage/ErrorPage";
import Home from "../../components/MainPages/Home/Home";
import Login from "../../components/MainPages/Login/Login";
import Signup from "../../components/MainPages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) => fetch(`product.json/category/${params.id}`),
        element: <Categories></Categories>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;