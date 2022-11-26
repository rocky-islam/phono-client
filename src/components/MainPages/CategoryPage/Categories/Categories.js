import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CategoriesItems from '../CategoriesItems/CategoriesItems';

const Categories = () => {
    
    const products = useLoaderData();
    console.log(products);
    // const {catName, product} = products;
    // console.log();
    
    

    return (
      <div className="md:mx-8 mx-auto">
        <div>
          <h1 className="text-xl text-center">{products.length} all Product</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* {product.map((items) => (
            <CategoriesItems
              items={items}
            ></CategoriesItems>
          ))} */}
          {
            products.map(items =><CategoriesItems
            key={items._id}
            items={items}
            ></CategoriesItems>)
          }
        </div>
      </div>
    );
};

export default Categories;