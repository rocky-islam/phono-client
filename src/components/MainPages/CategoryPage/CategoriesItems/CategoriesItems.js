import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesItems = ({items}) => {
    console.log(items);
    const {name, picture, resellPrice, originalPrice, location, used} = items;
    
    return (
      <div className='md:my-20'>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Original Price: <span className='line-through'>${originalPrice}</span></p>
            <p>Resell Price: ${resellPrice}</p>
            <p>Used: {used} years</p>
            <p>Location: {location}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to={`/item/${name}`}>Buy now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoriesItems;