import React, { useEffect, useState } from "react";
import Product from "./Product";

const Tools = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://agile-earth-47801.herokuapp.com/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="section-padding">
      <div className="tools-area container mx-auto px-4">
        <h2 className="section-title">our tools </h2>
        <div className="all-product grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
