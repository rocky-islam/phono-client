import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;