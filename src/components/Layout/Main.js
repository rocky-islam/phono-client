import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../MainPages/Shared/Footer/Footer';
import Navbar from '../MainPages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;