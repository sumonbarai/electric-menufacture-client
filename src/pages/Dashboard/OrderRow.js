import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order, index, refetch }) => {
  const { _id, picture, productName, quantity, status, transactionId } = order;
  const navigate = useNavigate();

  const handleCancel = () => {
    const Confirm = window.confirm("Are You sure cancel?");
    if (Confirm) {
      fetch(`https://electric-manufacture-server.onrender.com/order/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("successfully cancel order");
            refetch();
          }
        });
    }
  };

  const handlePayment = () => {
    navigate(`/payment/${_id}`);
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
            disabled
            onClick={handlePayment}
            className="btn btn-xs btn-secondary"
          >
            {status === "success" && transactionId ? transactionId : "unpaid"}
          </button>
        ) : (
          <button onClick={handlePayment} className="btn btn-xs btn-secondary">
            unpaid
          </button>
        )}
      </td>
      <td>
        {status ? (
          <button
            disabled
            onClick={handleCancel}
            className="btn btn-xs btn-secondary"
          >
            cancel
          </button>
        ) : (
          <button onClick={handleCancel} className="btn btn-xs btn-secondary">
            cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
