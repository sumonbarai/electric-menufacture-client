import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, picture, name, available, price, description, minimum } =
    product;
  const navigate = useNavigate();

  const handleOrder = (_id) => {
    navigate(`/purchase/${_id}`);
  };

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
            Minimum Order: <span>{minimum}</span>
          </p>
          <p className="font-bold">
            Price: <span>{price} per psc</span>
          </p>
          <p>{description.slice(0, 200)}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleOrder(_id)}
              className="btn btn-secondary"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
