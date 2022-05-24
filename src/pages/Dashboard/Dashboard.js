import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <div className="flex justify-between lg:justify-center items-center">
            <label
              tabIndex="1"
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
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
            <h2 className="section-title lg:mt-8">Welcome to dashboard</h2>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-8 overflow-y-auto w-48 sm:w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/myOrder">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
