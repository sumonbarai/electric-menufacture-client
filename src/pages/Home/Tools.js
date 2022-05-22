import React from "react";
import Product from "./Product";

const Tools = () => {
  const products = [
    {
      picture: "https://i.ibb.co/fMzZ6L8/fan-regulator-dimmer.jpg",
      name: "Fan regulator",
      available: "50",
      price: "75",
      description:
        "Electric Switches. Fixit has the largest collection of all types of best quality switches in BD including Four Gang Switch, Switch for Motor, Floating Switch etc.",
    },
    {
      picture: "https://i.ibb.co/fMzZ6L8/fan-regulator-dimmer.jpg",
      name: "Fan regulator",
      available: "50",
      price: "75",
      description:
        "Electric Switches. Fixit has the largest collection of all types of best quality switches in BD including Four Gang Switch, Switch for Motor, Floating Switch etc.",
    },
    {
      picture: "https://i.ibb.co/fMzZ6L8/fan-regulator-dimmer.jpg",
      name: "Fan regulator",
      available: "50",
      price: "75",
      description:
        "Electric Switches. Fixit has the largest collection of all types of best quality switches in BD including Four Gang Switch, Switch for Motor, Floating Switch etc.",
    },
  ];
  return (
    <section className="section-padding">
      <div className="tools-area container mx-auto px-4">
        <h2 className="section-title">our tools </h2>
        <div className="all-product grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
