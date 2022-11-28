import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const {data: buyers =[]} =useQuery({
        queryKey: ['buyer'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/buyer");
            const data = await res.json();
            return data;
        }
    })
    return (
      <div className="m-4">
        <h1 className="md:text-4xl">All Buyers</h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {buyers.map((buyer, i) => (
                  <tr>
                    <th>{i+1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td><button className='btn btn-xs btn-error'>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllBuyer;