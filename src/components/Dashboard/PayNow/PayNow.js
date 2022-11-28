import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);


const PayNow = () => {
    const item = useLoaderData()
    console.log(item);
    
    return (
      <div className="m-4">
        <div className="text-center">
          <h1 className="md:text-4xl">Payment for {item.product}</h1>
          <p className="md:text-2xl">Please pay ${item.price}</p>
        </div>
        <div className='w-96 my-16'>
          <Elements stripe={stripePromise}>
            <CheckoutForm 
                item={item}
            />
          </Elements>
        </div>
      </div>
    );
};

export default PayNow;