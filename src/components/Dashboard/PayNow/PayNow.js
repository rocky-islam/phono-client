import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PayNow = () => {
    const item = useLoaderData()
    return (
        <div>
            pay now page {item.product}
        </div>
    );
};

export default PayNow;