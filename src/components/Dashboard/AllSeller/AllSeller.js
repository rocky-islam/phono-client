import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const {data: sellers = []} = useQuery({
        queryKey: ['seller'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/seller");
            const data = await res.json();
            return data;
        }
    })

    return (
      <div className="m-3">
        <h2 className="text-3xl">All Seller</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete Seller</th>
                  <th>Verify seller</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map((seller, i) => (
                  <tr>
                    <th>{i+1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td><button className='btn btn-xs btn-error'>Delete</button></td>
                    <td><button className='btn btn-xs btn-success'>Verify</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllSeller;