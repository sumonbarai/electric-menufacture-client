import React, { useState } from "react";
import toast from "react-hot-toast";

const ManageAllOrderRow = ({ order, index, refetch }) => {
  // const [showBtn, setShowBtn] = useState(false);
  const { _id, picture, productName, quantity, status } = order;
  const confirmPayment = () => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      const url = `https://agile-earth-47801.herokuapp.com/order/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "success" }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            refetch();
            toast.success("customer payment confirmed");
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={picture} alt="" />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        {status ? (
          <button
            onClick={confirmPayment}
            disabled={status === "success"}
            className="btn btn-xs btn-secondary"
          >
            {status === "success" ? "Success" : "pending"}
          </button>
        ) : (
          <button disabled className="btn btn-xs btn-secondary">
            unpaid
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageAllOrderRow;
