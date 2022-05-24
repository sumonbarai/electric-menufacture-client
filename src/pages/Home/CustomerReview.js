import React from "react";

const CustomerReview = ({ review }) => {
  const { picture, rating, description } = review;
  return (
    <div className="mx-auto">
      <div className="card card-compact mx-w-96 p-3 text-sm bg-base-100 shadow-xl">
        <div className="avatar pt-3">
          <div className="w-32 rounded-full mx-auto">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="card-body ">
          <p className="font-bold">Rating: {rating}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
