import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../MainPages/Shared/ConfirmModal/ConfirmModal';

const AllBuyer = () => {
    const {data: buyers =[], refetch} =useQuery({
        queryKey: ['buyer'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/buyer");
            const data = await res.json();
            return data;
        }
    })

    // Delete buyer
    const [deleteBuyer, setDeleteBuyer] = useState(null);

    const closeModal = () =>{
        setDeleteBuyer(null)
    }

    const handleDeleteBuyer = (buyer) =>{
      
      fetch(`http://localhost:5000/buyer/${buyer._id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            toast.success('Delete Successfully')
            refetch();
        }
        
      })
    }

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
                    <th>{i + 1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>
                      {/* Delete btn */}
                      <label
                        onClick={() => setDeleteBuyer(buyer)}
                        htmlFor="confirm-modal"
                        className="btn btn-xs btn-error"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {deleteBuyer && (
          <ConfirmModal
            title={`Are You sure to delete`}
            message={`you Delete ${deleteBuyer.name}`}
            successAction={handleDeleteBuyer}
            successButtonName='Delete'
            modalData={deleteBuyer}
            closeModal={closeModal}
          ></ConfirmModal>
        )}
      </div>
    );
};

export default AllBuyer;