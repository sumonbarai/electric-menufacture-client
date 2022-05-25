import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../../shared/Spinner/Spinner";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || googleUser);

  // user navigation

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);
  // loading spinner code
  if (googleLoading || loading) {
    return <Spinner></Spinner>;
  }

  // user login and password
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  // login related error message
  let errorMessage;
  if (googleError || error) {
    errorMessage = error.message || googleError.message;
  }
  return (
    <div className="container mx-auto px-4 flex justify-center items-center h-[90vh]">
      <div className="card w-96  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Login</h2>
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
            {/* password field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <Link to="/forgetPassword" className="text-secondary">
                Forget password
              </Link>
            </div>

            <button className="btn btn-block btn-secondary mt-2">Login</button>
            {errorMessage && (
              <p className="text-red-500 mt-1">{errorMessage}</p>
            )}
            <p className="mt-3">
              Are You New?{" "}
              <span className="text-primary">
                <Link className="text-secondary" to="/signUp">
                  Create new account
                </Link>
              </span>
            </p>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-block btn-outline btn-secondary uppercase"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
