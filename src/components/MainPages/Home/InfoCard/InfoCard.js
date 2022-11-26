import React from 'react';


const InfoCard = ({data}) => {

    const {name, des, icon} = data;

    return (
      <div>
        <div className="card flex-col md:flex-row card-side bg-info p-4 shadow-xl">
          <figure>
            <img className="w-1/4 md:w-full" src={icon} alt="Movie" />
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