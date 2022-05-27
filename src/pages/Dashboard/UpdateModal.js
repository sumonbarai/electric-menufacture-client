import React from "react";
import toast from "react-hot-toast";

const UpdateModal = ({ user, setModalToggle, refetch }) => {
  const handleSave = (event) => {
    event.preventDefault();
    const updateData = {
      email: event.target.email.value,
      education: event.target.education.value,
      location: event.target.location.value,
      number: event.target.number.value,
      linkedin: event.target.linkedin.value,
    };
    const url = `https://agile-earth-47801.herokuapp.com/profileinformation?email=${user?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Updated Your Profile information");
          setModalToggle(null);
          refetch();
        }
        console.log(data);
      });
  };
  return (
    <div>
      <input type="checkbox" id="profileUpdateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profileUpdateModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold capitalize">
            update personal information
          </h3>
          <div className="py-4">
            <form onSubmit={handleSave}>
              <input
                type="text"
                placeholder="Type Your Full Name"
                className="input input-bordered w-full mb-3"
                value={user?.displayName}
                disabled
                readOnly
              />
              <input
                type="text"
                name="email"
                placeholder="Type Your Email"
                className="input input-bordered w-full mb-3"
                value={user?.email}
                disabled
                readOnly
              />
              <input
                type="text"
                placeholder="Education Information"
                name="education"
                className="input input-bordered w-full mb-3"
              />
              <input
                type="text"
                placeholder="Location"
                name="location"
                className="input input-bordered w-full mb-3"
              />
              <input
                type="text"
                placeholder="Type Your Mobile Number"
                name="number"
                className="input input-bordered w-full mb-3"
              />
              <input
                type="text"
                placeholder="Type Your Linkedin Profile Url"
                name="linkedin"
                className="input input-bordered w-full mb-3"
              />

              <div className="card-actions justify-end">
                <button className="btn btn-secondary">save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
