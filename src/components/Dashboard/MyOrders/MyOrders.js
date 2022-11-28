import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/buyitem?email=${user.email}`;
    // console.log(url);

    const {data: items = []} =useQuery({
        queryKey: ['buyitem', user?.email],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(items);
    
    
    return (
      <div className="m-3">
        <h1 className="md:text-3xl">My Orders</h1>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr>
                    <th>
                      <label>{i + 1}</label>
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
                          <div className="font-bold">{item.product}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      ${item.price}
                      <br />
                    </td>
                    <td>
                      <Link to={`/dashboard/paynow/${item._id}`}>
                        <button className="btn btn-sm btn-info">Pay Now</button>
                      </Link>
                    </td>
                    <th></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyOrders;