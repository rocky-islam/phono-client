import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../MainPages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border-2 ml-2">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li className="mb-2">
              <Link to='/dashboard'>My Product</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/seller">All Sellers</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/buyer">All Buyer</Link>
            </li>
            <li className="mb-2">
              <Link to="/dashboard/myorder">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
