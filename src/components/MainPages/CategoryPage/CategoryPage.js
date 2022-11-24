import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CategoryPage = () => {
    return (
        <div>
            <div>
                <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
        
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='blog'>blog</Link></li>
      <li><Link to=''>Sidebar Item 2</Link></li>
    </ul>
  
  </div>
</div>
            </div>
        </div>
    );
};

export default CategoryPage;