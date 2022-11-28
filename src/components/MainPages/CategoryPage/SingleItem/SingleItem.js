import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";

const SingleItem = () => {
  const { loading, user } = useContext(AuthContext);
  const item = useLoaderData();
  console.log(item);
  const {
    catName,
    name,
    picture,
    location,
    originalPrice,
    resellPrice,
    postDate,
    sellerName,
    used,
    sellerPhone,
    condation,
    purchase,
    description,
  } = item;

  const handleBuyNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    console.log(name, price, userName, email, phone);

    const buyItem = {
      category: catName,
      product: name,
      picture: picture,
      price: price,
      userName: userName,
      email: email,
      phone: phone,
    };
    console.log(buyItem);

    fetch("https://2nd-hand-phones-server.vercel.app/buyitem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("The item is booked.");
        }
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center h-[500px] items-center">
        <div
          className="animate-spin  radial-progress text-primary"
          style={{ "--value": 80 }}
        ></div>
      </div>
    );
  }

  return (
    <div className="mx-6 my-12">
      <div className="border-8 w-2/4 mx-auto">
        <div>
          <h1 className="lg:text-4xl text-center">{name}</h1>
        </div>
        <div className="card card-body shadow-xl">
          <figure className="flex justify-center">
            <img src={picture} className="w-4/6 p-4" alt="" />
          </figure>
          <div className="p-5">
            <h1 className="card-title">Name: {name}</h1>
            <p>Brand: {catName}</p>
            <p>
              Original Price:{" "}
              <span className="line-through">{originalPrice}</span>
            </p>
            <p>Resell Price: {resellPrice}</p>
            <p>Seller Name: {sellerName}</p>
            <p>Seller Phone number: {sellerPhone}</p>
            <p>Used : {used}</p>
            <p>Post date: {postDate}</p>
            <p>Location: {location}</p>
            <p>Product Condition: {condation}</p>
            <p>Purchase Year: {purchase}</p>
            <p>Description of this Product: {description}</p>
          </div>
          <div className="p-5">
            <label htmlFor="my-modal-3" className="btn btn-primary px-8">
              Book Now
            </label>
          </div>
        </div>
      </div>
      {/* Model */}
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Buy <span className="text-green-500">{name}</span> Now
          </h3>
          <form
            onSubmit={handleBuyNow}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                disabled
                value={resellPrice}
                className="input w-full input-bordered "
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input w-full input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                disabled
                placeholder="Email Address"
                className="input w-full input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input w-full input-bordered"
                required
              />
            </div>
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      {/* Model */}
    </div>
  );
};

export default SingleItem;
