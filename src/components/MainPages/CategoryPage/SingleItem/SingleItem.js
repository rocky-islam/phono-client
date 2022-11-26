import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider';

const SingleItem = () => {
    const {loading} = useContext(AuthContext);
    const item = useLoaderData();
    console.log(item);
    const {catName, name, picture, location, originalPrice, resellPrice, postDate, sellerName, used}= item;

    if (loading) {
      return (
        <div className="flex justify-center h-[500px] items-center">
          <div
            className="animate-spin  radial-progress text-primary"
            style={{ "--value": 80 }}
          ></div>
        </div>
      );
    }
    
    return (
      <div className="mx-6 my-12">
        <div className='border-8 w-2/4 mx-auto'>
          <div>
            <h1 className='lg:text-4xl text-center'>{name}</h1>
          </div>
          <div className='card card shadow-xl'>
            <figure className='flex justify-center'>
                <img src={picture} className='w-4/6 p-4' alt="" />
            </figure>
            <div className='p-5'>
                <h1 className='card-title'>Name: {name}</h1>
                <p>Brand: {catName}</p>
                <p>Original Price: <span className='line-through'>{originalPrice}</span></p>
                <p>Resell Price: {resellPrice}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Used : {used}</p>
                <p>Post date: {postDate}</p>
                <p>Location: {location}</p>
            </div>
            <div className='p-5'>
                <button className='btn btn-primary px-6'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleItem;