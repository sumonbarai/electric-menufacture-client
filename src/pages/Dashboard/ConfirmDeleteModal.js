import React from "react";
import toast from "react-hot-toast";

const ConfirmDeleteModal = ({ modal, setModal, refetch }) => {
  const handleConfirmDelete = () => {
    const id = modal._id;

    fetch("http://localhost:5000/product/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setModal(null);
          toast.success("successfully Delete product");
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="deleteConfirm" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="deleteConfirm"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Are you sure Delete product?</h3>
          <p className="py-4 text-right">
            <button
              onClick={handleConfirmDelete}
              className="btn btn-secondary btn-sm"
            >
              confirm delete
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
