import React from "react";
import CustomerReview from "./CustomerReview";

const Reviews = () => {
  const reviews = [
    {
      picture: "https://i.ibb.co/fMzZ6L8/fan-regulator-dimmer.jpg",
      rating: "4/5",
      description:
        "Electric Switches. Fixit has the largest collection of all types of best quality switches in BD including Four Gang Switch, Switch for Motor, Floating Switch etc.",
    },
    {
      picture: "https://i.ibb.co/fMzZ6L8/fan-regulator-dimmer.jpg",
      rating: "4/5",
      description:
        "Electric Switches. Fixit has the largest collection of all types of best quality switches in BD including Four Gang Switch, Switch for Motor, Floating Switch etc.",
    },
    {
      picture: "https://i.ibb.co/fMzZ6L8/fan-regulator-dimmer.jpg",
      rating: "4/5",
      description:
        "Electric Switches. Fixit has the largest collection of all types of best quality switches in BD including Four Gang Switch, Switch for Motor, Floating Switch etc.",
    },
  ];
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
