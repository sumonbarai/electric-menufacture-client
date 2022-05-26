import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../../shared/Spinner/Spinner";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const [modal, setModal] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("product", () => {
    return fetch(`http://localhost:5000/product`).then((res) => res.json());
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  console.log();
  return (
    <div>
      <h2 className="text-3xl text-center uppercase mb-8">manage product</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <ProductRow
                key={index}
                product={product}
                index={index}
                refetch={refetch}
                setModal={setModal}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* delete confirm modal */}
      {modal && (
        <ConfirmDeleteModal
          setModal={setModal}
          modal={modal}
          refetch={refetch}
        ></ConfirmDeleteModal>
      )}
    </div>
  );
};

export default ManageProduct;
