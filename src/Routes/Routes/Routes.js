import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../components/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../components/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../components/Dashboard/AllSeller/AllSeller";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../components/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../components/Dashboard/MyProduct/MyProduct";
import PayNow from "../../components/Dashboard/PayNow/PayNow";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import Main from "../../components/Layout/Main";
import Blog from "../../components/MainPages/Blog/Blog";
import Categories from "../../components/MainPages/CategoryPage/Categories/Categories";
import CategoryPage from "../../components/MainPages/CategoryPage/CategoryPage";
import SingleItem from "../../components/MainPages/CategoryPage/SingleItem/SingleItem";
import ErrorPage from "../../components/MainPages/ErrorPage/ErrorPage";
import Home from "../../components/MainPages/Home/Home";
import Login from "../../components/MainPages/Login/Login";
import Signup from "../../components/MainPages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        loader: ({ params }) =>
          fetch(
            `https://2nd-hand-phones-server.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Categories></Categories>
          </PrivateRoute>
        ),
      },
      {
        path: "/item/:id",
        element: <SingleItem></SingleItem>,
        loader: ({ params }) =>
          fetch(
            `https://2nd-hand-phones-server.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/product",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/seller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/buyer",
        element: <AllBuyer></AllBuyer>,
      },
      {
        path: "/dashboard/myorder",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/paynow/:id",
        element: <PayNow></PayNow>,
        loader: ({ params }) =>
          fetch(
            `https://2nd-hand-phones-server.vercel.app/buyitems/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
