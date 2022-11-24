import React from 'react';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
      {
        id: 1,
        name: "John Cena",
        image:
          "https://images.firstpost.com/wp-content/uploads/2022/06/JohnCena-WWE-640.jpg?impolicy=website&width=1200&height=800",
        review: "i am with this services they are very honest and help full",
        location: "New York",
      },
      {
        id: 2,
        name: "Randy Orton",
        image:
          "https://www.wrestlinginc.com/img/gallery/randy-orton-says-wwe-stars-helped-him-overcome-attitude-problems/intro-import.jpg",
        review: "i am with this services they are very honest and help full",
        location: "California",
      },
      {
        id: 3,
        name: "Roman Reigns",
        image:
          "https://www.sportsganga.com/wp-content/uploads/2022/08/roman-reigns-wwe-pic-min.jpg",
        review: "i am with this services they are very honest and help full",
        location: "Washington",
      },
    ];

    return (
        <div className='lg:my-20'>
            <div className='text-center'>
                <h3 className='text-xl font-bold'>Testimonial</h3>
                <h1 className='text-3xl font-semibold'>Our User Says</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;