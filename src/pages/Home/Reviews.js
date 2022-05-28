import React, { useEffect, useState } from "react";
import CustomerReview from "./CustomerReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://agile-earth-47801.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="section-padding section-dark-white">
      <div className="reviews-area container mx-auto px-4">
        <h2 className="section-title">Our Reviews </h2>
        <div className="all-reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <CustomerReview key={index} review={review}></CustomerReview>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
