import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {
    //  const [categories, setCategories] = useState([]);
    //  console.log(categories);

    //  useEffect(() => {
    //    axios.get("product.json").then((data) => setCategories(data.data));
    //  }, []);

    const product = useLoaderData();
    console.log(product);
    

    
    return (
        <div>
            hello category {product.length}
        </div>
    );
};

export default Categories;