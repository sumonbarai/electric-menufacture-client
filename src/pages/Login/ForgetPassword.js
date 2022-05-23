import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../firebase.init";
import Spinner from "../../shared/Spinner/Spinner";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    toast.success("Successfully send password reset email!");
    reset();
  };
  if (sending) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="container mx-auto px-4 flex justify-center items-center h-[90vh]">
      <div className="card w-96  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Forget Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email address */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please enter valid email address",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <button className="btn btn-block btn-outline btn-secondary mt-2">
              Password Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
