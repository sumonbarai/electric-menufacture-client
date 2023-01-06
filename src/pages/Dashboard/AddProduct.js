import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const insertedProduct = {
      name: data.name,
      available: data.available,
      price: data.price,
      description: data.description,
      minimum: data.minimum,
      picture: data.picture,
    };
    const url = `https://electric-manufacture-server.vercel.app/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertedProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Successfully added Product");
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="section-title">add your product</h2>
      <div className="card w-6/6 md:w-4/6 bg-base-100 shadow-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          {/* name field */}
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Product Title name"
            className="input input-bordered w-full my-2"
          />
          <p className="text-red-500">{errors.name && "Name is required"}</p>
          {/* price field */}
          <input
            type="text"
            {...register("price", { required: true })}
            placeholder="Product price"
            className="input input-bordered w-full my-2"
          />
          <p className="text-red-500">{errors.price && "Price is required"}</p>
          {/*  available */}
          <input
            type="text"
            {...register("available", { required: true })}
            placeholder="Number of Product"
            className="input input-bordered w-full my-2"
          />
          <p className="text-red-500">
            {errors.available && "Number of product is required"}
          </p>
          {/*  Minimum order */}
          <input
            type="text"
            {...register("minimum", { required: true })}
            placeholder="Minimum order of Product"
            className="input input-bordered w-full my-2"
          />
          <p className="text-red-500">
            {errors.minimum && "Minimum order of Product is required"}
          </p>
          {/*  decription field */}

          <textarea
            type="text"
            {...register("description", { required: true, maxLength: 500 })}
            placeholder="Product description under 500 word"
            className="textarea textarea-bordered w-full my-2"
          ></textarea>
          <p className="text-red-500">
            {errors.description?.type === "required" &&
              "description is required"}
          </p>
          <p className="text-red-500">
            {errors.description?.type === "maxLength" &&
              "description length over"}
          </p>

          {/* image field */}
          <input
            type="text"
            {...register("picture", { required: true })}
            placeholder="please give image url"
            className="input input-bordered w-full my-2"
          />
          <p className="text-red-500">
            {errors.picture && "image url is empty"}
          </p>
          {/* button */}
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
