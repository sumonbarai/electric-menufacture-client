import React from "react";
import notFound from "../assets/images/404_bg.png";

const NotFound = () => {
  return (
    <div className="container px-16 mx-auto">
      <div className="flex justify-center items-center h-[80vh]">
        <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
