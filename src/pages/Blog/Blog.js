import React from "react";

const Blog = () => {
  return (
    <div className="section-padding">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">এসাইনমেন্ট ১২ এর প্রশ্নের উত্তর </h2>
        <div className="question py-3">
          <p className="text-2xl">
            প্রশ্ন -১: কিভাবে রিয়াক্ট অ্যাপ্লিকেশন এর পারফর্মেন্স বাড়ানো যায়
            ?
          </p>
          <p>
            উত্তর : রিএক্ট জেস মূলত ওয়েবসাইট এর ইউসার ইন্টারফেস তৈরি করার জন্য
            ব্যবহার করা হয়. তাই রিএক্ট এর বেস্ট পারফরমেন্স এর জন্য নিচের বিষয়
            গুলা মাথায় রাখতে হবে. <br />
            *Dom nodes এর পরিবর্তে react Fragment user করতে হবে। <br />
            *রিএক্ট apps তৈরি করার পর তা অবশই বিল্ড ফাইল তৈরি করে তা আপলোড করতে
            হবে
            <br />
            *components লোডিং এর জন্য react suspense এন্ড react lazy ব্যবহার
            করতে হবে <br />* components Memoization এর জন্য react memo ব্যবহার
            করতে হবে{" "}
          </p>
        </div>
        <div className="question py-3">
          <p className="text-2xl">
            প্রশ্ন -২: React application এ state manage করার পদ্ধতি গুলা কি ?
          </p>
          <p>
            উত্তর : React application এ state manage করার পদ্ধতি গুলা চার টি।
            <br />
            Local state <br /> Global state <br />
            server state
            <br /> URL State
          </p>
        </div>
        <div className="question py-3">
          <p className="text-2xl">
            প্রশ্ন -৩: কিভাবে prototypal inheritance কাজ করে ?
          </p>
          <p>
            উত্তর : জাভাস্ক্রিপ্ট এ প্রতিটি অবজেক্ট এর মধ্যে প্রপার্টি এন্ড মেথড
            রয়েছে এবং কিছু hidden প্রপার্টি রয়েছে যা prototype বলে পরিচিত।
            জাভাস্ক্রিপ্ট এ যকন একটা অবজেক্ট অন্য একটা অবজেক্ট এর প্রপার্টি এন্ড
            মেথড ব্যবহার করে তখন থাকে prototypal inheritance বলে।
          </p>
        </div>
        <div className="question py-3">
          <p className="text-2xl">
            প্রশ্ন -৪: ধরো তোমার একটা products এর array আছে এবং প্রতিটি product
            এর name ,description,price আছে। তুমি কিভাবে product এর name দিয়া
            search করবে ?
          </p>
          <p>
            উত্তর : প্রথমে products array এর উপর filter method use করতে হবে।
            filter method এর মধ্যে call back function এর paramer হিসাব যে ভ্যালু
            পাওয়া যাবে তা একটা object হবে হিসাব এ পাওয়া যাবে। ওই অবজেক্ট এর নাম
            প্রপার্টি এর ভ্যালু কে toLowercase () করে যে নাম সার্চ করতে চাই তা
            তিনটা === দিয়া চেক করতে হবে।{" "}
          </p>
        </div>
        <div className="question py-3">
          <p className="text-2xl">
            প্রশ্ন -৫: কেন তুমি react এর state এর ভ্যালু directly পরিবর্তন করবে
            না ?
          </p>
          <p>
            উত্তর :রিএক্ট এর ক্ষেত্রে state ভ্যালু directly change করা যাবে না।
            যদি স্টেট ভ্যালু directly change করি তাহলে this .state তাৎক্ষণিক
            change হয় না। ফলে এরর চলে আসে। তাই রিএক্ট এর ক্ষেত্রে state এর value
            চেঞ্জ করতে হলে সবসময় set state এর মাধ্যমে করতে হয়{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
