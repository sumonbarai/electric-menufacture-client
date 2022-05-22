import React from "react";
import bannerBg from "../../assets/images/header-bg.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{ background: `url(${bannerBg})` }}
    >
      <div className="hero-content text-center text-white">
        <div className="max-w-[800px]">
          <p className="py-6 text-2xl italic">
            Welcome To Our Electri Manufacture!
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5">
            IT'S NICE TO MEET YOU
          </h1>
          <button className="btn btn-secondary text-white uppercase">
            Tell me more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;