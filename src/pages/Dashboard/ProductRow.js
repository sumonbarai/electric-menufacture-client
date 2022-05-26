import React from "react";

const ProductRow = ({ product, index, refetch, setModal }) => {
  const { picture, name, available } = product;

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
      <td>{name}</td>
      <td>{available}</td>
      <td>
        <label
          onClick={() => setModal(product)}
          htmlFor="deleteConfirm"
          className="btn modal-button btn-xs btn-secondary"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
