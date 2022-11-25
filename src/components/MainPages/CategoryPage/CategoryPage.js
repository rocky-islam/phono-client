import React, { useEffect, useState } from 'react';

const CategoryPage = () => {
    const [cat, setCat] = useState([]);
    const [product, setProduct] = useState([]);
    console.log(cat);
    console.log(product);
    
    

    useEffect(() => {
        fetch('catProduct.json')
        .then( res => res.json())
        .then(data => {
            console.log(data);
            setCat(data);
            
        })
    },[])
    return (
        <div>
            <h1>this is category test page {cat.length}</h1>
            {/* <div>
                {
                    cat.map(cate =><div>
                        {
                            cate.product.map(products => setProduct(products))
                        }
                    </div>)
                    
                }
            </div> */}
        </div>
    );
};

export default CategoryPage;