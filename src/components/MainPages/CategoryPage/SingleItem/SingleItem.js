import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider';

const SingleItem = () => {
    const {loading, user} = useContext(AuthContext);
    const item = useLoaderData();
    console.log(item);
    const {catName, name, picture, location, originalPrice, resellPrice, postDate, sellerName, used}= item;

    const handleBuyNow = event =>{
        event.preventDefault();
        toast.success('Successfully Buy')
    }

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
        <div className="border-8 w-2/4 mx-auto">
          <div>
            <h1 className="lg:text-4xl text-center">{name}</h1>
          </div>
          <div className="card card shadow-xl">
            <figure className="flex justify-center">
              <img src={picture} className="w-4/6 p-4" alt="" />
            </figure>
            <div className="p-5">
              <h1 className="card-title">Name: {name}</h1>
              <p>Brand: {catName}</p>
              <p>
                Original Price:{" "}
                <span className="line-through">{originalPrice}</span>
              </p>
              <p>Resell Price: {resellPrice}</p>
              <p>Seller Name: {sellerName}</p>
              <p>Used : {used}</p>
              <p>Post date: {postDate}</p>
              <p>Location: {location}</p>
            </div>
            <div className="p-5">
              <label htmlFor="my-modal-3" className="btn btn-primary px-8">
                Proceed to buy
              </label>
            </div>
          </div>
        </div>
        {/* Model */}
        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Buy <span className="text-green-500">{name}</span> Now
            </h3>
            <p className="py-4">price: {resellPrice}</p>
            <p>Name: {user?.displayName}</p>
            <p>Name: {user?.email}</p>
            <div>
                <label className='label'>
                    <span className='label-text'>Enter your Phone Number</span>
                </label>
              <input
                type="text"
                name='phone'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div>
                <button onClick={handleBuyNow} type="submit" className='btn btn-primary my-2'>Buy now</button>
            </div>
          </div>
        </div>
        {/* Model */}
      </div>
    );
};

export default SingleItem;