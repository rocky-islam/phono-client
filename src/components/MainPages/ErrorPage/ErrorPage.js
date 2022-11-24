import React from 'react';
import { CiFaceFrown } from "react-icons/ci";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="mx-8">
        <div className="flex flex-col justify-center items-center h-screen">
          <div>
            <CiFaceFrown size={220}></CiFaceFrown>
          </div>
          <div>
            <p className='sm:text-4xl md:text-5xl'>Page Not Found</p>
            <p className='text-center my-4 md:text-xl text-green-600 underline underline-offset-4'><Link to='/'>Return to home page</Link></p>
          </div>
        </div>
        
      </div>
    );
};

export default ErrorPage;