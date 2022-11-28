import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const AddProduct = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    // console.log(data);

    const addProduct = {
      catName: data.category,
      category_id: data.category_id,
      name: data.name,
      picture: data.picture,
      resellPrice: data.price,
      originalPrice: data.originalPrice,
      location: data.location,
      sellerName: user.displayName,
      used: data.useYear,
      postDate: date,
      sellerEmail: user.email,
      condation: data.condition,
      description: data.description,
      purchase: data.purchaseYear,
      sellerPhone: data.number,
    };

    console.log(addProduct);
    fetch("https://2nd-hand-phones-server.vercel.app/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product inserted successfully");
          navigate("/dashboard");
        }
      });
  };
  return (
    <div>
      <div className="m-4">
        <h1 className="md:text-4xl text-center">Add Your Product Here</h1>
        <div className="md:mt-12">
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Photo URL</span>
              </label>
              <input
                type="text"
                {...register("picture", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.picture && (
                <p className="text-red-500">{errors.picture?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price ( You want to Sell )</span>
              </label>
              <input
                type="text"
                {...register("price", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="text"
                {...register("originalPrice", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.originalPrice && (
                <p className="text-red-500">{errors.originalPrice?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select
                {...register("category", {
                  required: "Category is required",
                })}
                className="select select-bordered"
              >
                <option disabled selected></option>
                <option value="I Phone">I Phone</option>
                <option value="Samsung">Samsung</option>
                <option value="One Plus">One Plus</option>
              </select>
              {errors.category && (
                <p className="text-red-500">{errors.category?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Category ID</span>
              </label>
              <select
                {...register("category_id", {
                  required: "Category is required",
                })}
                className="select select-bordered"
              >
                <option disabled selected></option>
                <option value="1">I Phone For 1</option>
                <option value="2">Samsung For 2</option>
                <option value="3">One Plus For 3</option>
              </select>
              {errors.category_id && (
                <p className="text-red-500">{errors.category_id?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Condition</span>
              </label>
              <select
                {...register("condition", {
                  required: "Category is required",
                })}
                className="select select-bordered"
              >
                <option disabled selected></option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
              {errors.condition && (
                <p className="text-red-500">{errors.condition?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Used Year</span>
              </label>
              <input
                type="text"
                {...register("useYear", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.useYear && (
                <p className="text-red-500">{errors.useYear?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Year Of Purchase</span>
              </label>
              <input
                type="text"
                {...register("purchaseYear", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.purchaseYear && (
                <p className="text-red-500">{errors.purchaseYear?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Seller Phone Number</span>
              </label>
              <input
                type="text"
                {...register("number", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.number && (
                <p className="text-red-500">{errors.number?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                type="text"
                {...register("description", {
                  required: "Name is required",
                })}
                className="textarea textarea-bordered w-full max-w-xs"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description?.message}</p>
              )}
            </div>
            <div>
              <input
                type="submit"
                value="Add Product"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
