import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  const [user] = useAuthState(auth);
  useEffect(() => {
    const url = `https://agile-earth-47801.herokuapp.com/product/${product_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product_id]);
  const { picture, name, available, price, description, minimum } = product;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;

    if (parseFloat(quantity) >= parseFloat(minimum)) {
      if (parseFloat(quantity) <= parseFloat(available)) {
        const orderInformation = {
          email: user.email,
          productName: name,
          mobile: event.target.number.value,
          quantity: quantity,
          picture: picture,
          price: price,
        };
        const url = `https://agile-earth-47801.herokuapp.com/order`;
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("assessToken")}`,
          },
          body: JSON.stringify(orderInformation),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Your Order Successfully Place");
              event.target.reset();
            }
          });
      } else {
        toast.error("Your order is over available Order Limit");
      }
    } else {
      toast.error("Your order is lower minimum Order Limit");
    }
  };
  return (
    <div className="section-padding">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">welcome purchase details page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img className="max-w-xs" src={picture} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="font-bold">
                  Available: <span>{available}</span>
                </p>
                <p className="font-bold">
                  Minimum Order: <span>{minimum}</span>
                </p>
                <p className="font-bold">
                  Price: <span>{price} per psc</span>
                </p>
                <p>{description}</p>
                <h2 className="card-title">Personal Information</h2>
                <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handlePlaceOrder}>
              <h3 className="uppercase text-center text-2xl pb-5 mt-4 md:mt-52">
                user information
              </h3>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address"
                className="input input-bordered w-full mb-3"
                required
              />
              <input
                type="text"
                name="number"
                placeholder="Enter Your Mobile Number"
                className="input input-bordered w-full mb-3"
                required
              />
              <input
                type="text"
                name="quantity"
                placeholder="Order Quantity over minimum Order"
                className="input input-bordered w-full mb-3"
                required
              />
              <div className="card-actions justify-center">
                <button className="btn btn-secondary">Confirm Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
