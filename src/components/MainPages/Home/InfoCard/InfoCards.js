import React from 'react';
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
      {
        id: 1,
        name: "Our Support",
        des: "24X7 Support",
        icon: clock,
      },
      {
        id: 2,
        name: "Contact Us Now",
        des: "+8801711112222",
        icon: phone,
      },
      {
        id: 3,
        name: "Visit Our Location",
        des: "Laxmipur, Rajshahi, Bangladesh",
        icon: marker,
      },
    ];

    return (
        <div className='mx-8 my-12'>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                
                {
                    cardData.map(data => <InfoCard
                        key={data.id}
                        data={data}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;