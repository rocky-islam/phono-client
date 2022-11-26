import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import phonelogo from '../../../../assets/images/phonologo.png'
import logo from '../../../../assets/images/logo.png';
import { AuthContext } from '../../../AuthProvider';
import toast from 'react-hot-toast';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        logOut()
        .then(() => {
          toast.success('Successfully Logout');
          navigate('/login')
        })
        .catch(error => console.log(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li className='dropdown'>
            <label tabIndex={2} className="rounded-btn">Dropdown
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </label>
            <ul tabIndex={3} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/blog'>Item 1</Link></li> 
          <li><Link to=''>Item 2</Link></li>
        </ul>
        </li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ? 
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
            </>
            :
            <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </>
        }
    </>

    
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={1}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
                
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              <img className="w-16 md:w-14" src={phonelogo} alt="" />
              <img className="w-16 md:w-28" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <div className='mx-3'>
                {
                    user?.uid && <p>{user?.displayName}</p>
                }
            </div>
            {/* <Link className="btn">Get started</Link> */}
          </div>
        </div>
      </div>
    );
};

export default Navbar;