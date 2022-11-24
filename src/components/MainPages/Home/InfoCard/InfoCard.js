import React from 'react';


const InfoCard = ({data}) => {

    const {name, des, icon} = data;

    return (
      <div>
        <div className="card card-side bg-info p-6 shadow-xl">
          <figure>
            <img src={icon} alt="Movie" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">{name}</h2>
            <p>{des}</p>
          </div>
        </div>
      </div>
    );
};

export default InfoCard;