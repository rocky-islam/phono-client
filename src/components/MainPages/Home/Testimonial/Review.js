import React from 'react';

const Review = ({review}) => {
    const {name, image, review: userReview, location} = review;
    return (
      <div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p>{userReview}</p>
            <div className="card-actions justify-center items-center my-2">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={image} alt='' />
                </div>
              </div>
              <div>
                <p className='text-lg'>{name}</p>
                <p className='text-xs'>{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;