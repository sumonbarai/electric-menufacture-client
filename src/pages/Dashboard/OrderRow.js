import React from "react";

const OrderRow = ({ order, index }) => {
  const { picture, productName, quantity } = order;
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
        <button className="btn btn-xs btn-secondary">unpaid</button>
      </td>
      <td>
        <button className="btn btn-xs btn-secondary">remove</button>
      </td>
    </tr>
  );
};

export default OrderRow;
