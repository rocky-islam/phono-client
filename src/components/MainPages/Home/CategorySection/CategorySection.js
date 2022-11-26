import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const CategorySection = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);
    
    
    

    useEffect(() => {
        axios
          .get("http://localhost:5000/catProduct")
          .then((data) => setCategories(data.data));
    },[])

  return (
    <div className="my-16">
      <div>
        <p className="text-3xl font-semibold text-center">See Our Categories</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
        {categories.map((category) => (      
            <div key={category.id} className="card card-compact  shadow-xl">
              <figure>
                <img className="" src={category.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.catName}</h2>
                <p>Click here to show all product in this category</p>
                <div className="card-actions justify-end">
                  <Link to={`/category/${category._id}`} className="btn btn-primary">See Product</Link>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
