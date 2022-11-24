import React from 'react';
import mobile from '../../../../assets/images/mobile-shopping.gif'
import bgImage from '../../../../assets/images/Bgimage.jpg'

const Banner = () => {
    return (
      <div>
        <div className="hero">
          <div className="hero-content lg:w-3/4 justify-between flex-col md:flex-row-reverse md:mx-8">
            <div className="md:w-2/5">
              <img src={mobile} className="rounded-lg " alt="logo" />
            </div>
            <div className=" md:w-1/2">
              <h1
                className="text-5xl font-bold uppercase
              bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500
              "
              >
                Welcome to
              </h1>
              <h1
                className="text-5xl font-bold uppercase
              bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-sky-600
              "
              >
                Phono
              </h1>
              <h1
                className="text-5xl font-bold uppercase
              bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500
              "
              >
                Website
              </h1>
              <p className="py-6">
                We Make It Easy For You To Sell Your Used Gadgets. Top Offer in
                Seconds. Just 4 Easy Steps. Any iPhone Series. All Makes. All
                Models. Working or Damaged. Highlights: Order Tracking
                Available, Quick Payment Option Available, Help Center
                Available.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;