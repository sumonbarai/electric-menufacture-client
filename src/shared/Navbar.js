import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const menu = (
    <>
      <li>
        <NavLink className="text-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="text-lg" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}

      {user ? (
        <li>
          <button
            onClick={() => {
              signOut(auth);
              navigate("/");
              localStorage.removeItem("assessToken");
            }}
            className="btn btn-link justify-start items-center"
            style={{ textDecoration: "none" }}
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink className="text-lg" to="/login">
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className=" bg-primary">
      <div className="navbar container px-4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex="0"
              className="btn btn-ghost text-base-100 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-secondary text-xl"
          >
            Electric Manufacture
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-base-100">{menu}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
