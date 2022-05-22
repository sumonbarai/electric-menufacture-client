import React from "react";

const Product = ({ product }) => {
  const { picture, name, available, price, description } = product;
  return (
    <div className="mx-auto">
      <div className="card card-compact mx-w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={picture} alt="card photos" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold">
            Available: <span>{available}</span>
          </p>
          <p className="font-bold">
            Minimum Order: <span>20</span>
          </p>
          <p className="font-bold">
            Price: <span>{price}</span>
          </p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
