import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  const [user] = useAuthState(auth);
  useEffect(() => {
    const url = `http://localhost:5000/product/${product_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product_id]);
  const { _id, picture, name, available, price, description, minimum } =
    product;
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
            <form>
              <h3 className="uppercase text-center text-2xl pb-5 mt-4 md:mt-52">
                user information
              </h3>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered w-full mb-3"
                required
              />
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                className="input input-bordered w-full mb-3"
                required
              />
              <input
                type="text"
                placeholder="Order Quantity over minimum Quantity"
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
