import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../../MainPages/Shared/ConfirmModal/ConfirmModal";

const AllSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(
        "https://2nd-hand-phones-server.vercel.app/seller"
      );
      const data = await res.json();
      return data;
    },
  });

  // verify seller
  const handleMakeVerify = (id) => {
    fetch(`https://2nd-hand-phones-server.vercel.app/seller/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Seller Verified Successfully");
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  // Delete buyer
  const [deleteBuyer, setDeleteBuyer] = useState(null);

  const closeModal = () => {
    setDeleteBuyer(null);
  };

  const handleDeleteBuyer = (buyer) => {
    fetch(`https://2nd-hand-phones-server.vercel.app/buyer/${buyer._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Delete Successfully");
          refetch();
        }
      });
  };

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
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>
                    {/* <button className="btn btn-xs btn-error">Delete</button> */}
                    {/* Delete btn */}
                    <label
                      onClick={() => setDeleteBuyer(seller)}
                      htmlFor="confirm-modal"
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                  </td>
                  <td>
                    {seller?.verify ? (
                      <>
                        <p className="btn btn-xs btn-success">
                          Already Verified
                        </p>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleMakeVerify(seller._id)}
                          className="btn btn-xs btn-info"
                        >
                          Verify
                        </button>
                      </>
                    )}
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
          successButtonName="Delete"
          modalData={deleteBuyer}
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default AllSeller;
