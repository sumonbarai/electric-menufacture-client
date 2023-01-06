import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Spinner from "../../shared/Spinner/Spinner";
import UpdateModal from "./UpdateModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [modalToggle, setModalToggle] = useState(null);
  const {
    isLoading,
    data: information,
    refetch,
  } = useQuery("informations", () =>
    fetch(
      `https://electric-manufacture-server.vercel.app/profileinformation?email=${user?.email}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h2 className="section-title">user personal information</h2>
      <div className="card w-6/6 md:w-4/6 bg-base-100 shadow-lg mx-auto">
        <div className="p-8">
          <div className="flex flex-row">
            <div className="w-full">
              <div className="flex">
                <p className="font-bold py-2 w-full sm:w-1/4">Full Name :</p>
                <p className="py-2 w-full sm:w-3/4">{user?.displayName}</p>
              </div>
              <div className="flex">
                <p className="font-bold py-2 w-full sm:w-1/4">
                  Email Address :
                </p>
                <p className="py-2 w-full sm:w-3/4">{user?.email}</p>
              </div>
              <div className="flex">
                <p className="font-bold py-2 w-full sm:w-1/4">Education :</p>
                <p className="py-2 w-full sm:w-3/4">
                  {information
                    ? information.education
                    : "No Eduction information"}
                </p>
              </div>
              <div className="flex">
                <p className="font-bold py-2 w-full sm:w-1/4">Location :</p>
                <p className="py-2 w-full sm:w-3/4">
                  {information
                    ? information.location
                    : "No Location information"}
                </p>
              </div>
              <div className="flex">
                <p className="font-bold py-2 w-full sm:w-1/4">Phone Number :</p>
                <p className="py-2 w-full sm:w-3/4">
                  {information ? information.number : "No Number information"}
                </p>
              </div>
              <div className="flex">
                <p className="font-bold py-2 w-full sm:w-1/4">
                  LinkedIn profile :
                </p>
                <p className="py-2 w-full sm:w-3/4">
                  {information
                    ? information.linkedin
                    : "No LinkedIn information"}
                </p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <label
              onClick={() => setModalToggle(information)}
              htmlFor="profileUpdateModal"
              className="btn modal-button btn-secondary"
            >
              update
            </label>
          </div>
        </div>
      </div>

      {/* modal box */}
      {modalToggle && (
        <UpdateModal
          user={user}
          setModalToggle={setModalToggle}
          refetch={refetch}
        ></UpdateModal>
      )}
    </div>
  );
};

export default MyProfile;
