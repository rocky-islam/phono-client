import React from 'react';
import Banner from './Banner/Banner';
import CategorySection from './CategorySection/CategorySection';
import InfoCards from './InfoCard/InfoCards';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <InfoCards></InfoCards>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;