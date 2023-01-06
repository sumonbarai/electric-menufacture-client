import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Spinner from "../../shared/Spinner/Spinner";

const MakeAdmin = () => {
  const {
    data: allUser,
    isLoading,
    refetch,
  } = useQuery("order", () => {
    return fetch(`https://electric-manufacture-server.vercel.app/user`).then(
      (res) => res.json()
    );
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const handleMakeAdmin = (email) => {
    const confirm = window.confirm("Are You sure make admin ?");
    if (confirm) {
      const roll = { roll: "admin" };
      fetch(`https://electric-manufacture-server.vercel.app/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roll),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(`${email} is now Admin`);
            refetch();
          }
        });
    }
  };
  const handleRemoveAdmin = (email) => {
    const confirm = window.confirm("Are You sure remove admin ?");
    if (confirm) {
      const roll = { roll: "" };
      fetch(`https://electric-manufacture-server.vercel.app/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roll),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(`${email} admin access remove`);
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-center uppercase mb-8">manage admin user</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((singleUser, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{singleUser.email}</td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(singleUser.email)}
                    className="btn btn-xs btn-secondary"
                    disabled={singleUser.roll ? true : false}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveAdmin(singleUser.email)}
                    disabled={singleUser.roll ? false : true}
                    className="btn btn-xs btn-secondary"
                  >
                    Remove Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
