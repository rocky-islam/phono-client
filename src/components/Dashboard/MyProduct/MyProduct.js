import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const MyProduct = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/myproduct?email=${user?.email}`;
    // console.log(url);

    const {data: product =[]} = useQuery({
      queryKey: ["myproduct", user?.email],
      queryFn: async() =>{
        const res =await fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        const data = await res.json();
        return data;
      }
    });
    
    // console.log(product);
    

  return (
    <div className="m-4">
      <h3 className="text-3xl font-semibold mb-5">My Product</h3>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  
                </th>
                <th>Name</th>
                <th>Brand</th>
                <th>Post Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item ,i) => (
                <tr key={item._id}>
                  <th>
                    {i+1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-16 h-16">
                          <img
                            src={item.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">Resell Price: ${item.resellPrice}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.catName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Location: {item.location}
                    </span>
                  </td>
                  <td>{item.postDate}</td>
                  <th>
                    <button className="btn btn-error btn-xs">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
