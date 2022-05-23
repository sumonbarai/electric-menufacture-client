import React from "react";
import Spinner from "../../shared/Spinner/Spinner";

const Blog = () => {
  return (
    <div className="section-padding">
      <div className="container px-4 mx-auto">
        <h2 h2 className="section-title">
          এসাইনমেন্ট ১২ এর প্রশ্নের উত্তর{" "}
        </h2>
        <div className="question py-3">
          <p className="text-2xl">
            প্রশ্ন -১: কিভাবে রিয়াক্ট অ্যাপ্লিকেশন এর পারফর্মেন্স বাড়ানো যায়
            ?
          </p>
          <p>
            রিএক্ট জেস মূলত ওয়েবসাইট এর ইউসার ইন্টারফেস তৈরি করার জন্য ব্যবহার
            করা হয়. তাই রিএক্ট এর বেস্ট পারফরমেন্স এর জন্য নিচের বিষয় গুলা মাথায়
            রাখতে হবে. <br />
            *Dom nodes এর পরিবর্তে react Fragment user করতে হবে। <br />
            *রিএক্ট apps তৈরি করার পর তা অবশই বিল্ড ফাইল তৈরি করে তা আপলোড করতে
            হবে
            <br />
            *components লোডিং এর জন্য react suspense এন্ড react lazy ব্যবহার
            করতে হবে <br />* components Memoization এর জন্য react memo ব্যবহার
            করতে হবে{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
