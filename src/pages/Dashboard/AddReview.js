import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const imageStorageKey = "9e9351bf7ec61f0e801e3e46ff782ed6";
  const onSubmit = async (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        // send data to my mongodb database
        if (result.success) {
          const uploadedImage = result.data.url;
          const customerFeedback = {
            picture: uploadedImage,
            rating: data.ratting,
            description: data.feedback,
          };
          const url = `https://electric-manufacture-server.vercel.app/review`;
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(customerFeedback),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success("Successfully added Your review");
                reset();
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="section-title">add your review</h2>
      <div className="card w-6/6 md:w-4/6 bg-base-100 shadow-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <input
            type="text"
            {...register("ratting", { min: 1, max: 5 })}
            placeholder="Give review out of 5"
            className="input input-bordered w-full mb-2"
          />

          <textarea
            {...register("feedback", { required: true, maxLength: 520 })}
            className="textarea textarea-bordered mb-2 w-full"
            placeholder="Give me Your feedback under 520 letter"
          ></textarea>
          <input type="file" {...register("img", { required: true })} />
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
