import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../shared/Spinner/Spinner";
import ManageAllOrderRow from "./ManageAllOrderRow";

const ManageAllOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("order", () => {
    return fetch(`https://agile-earth-47801.herokuapp.com/order`).then((res) =>
      res.json()
    );
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h2 className="text-3xl text-center uppercase mb-8">
        total Order maintains
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageAllOrderRow
                key={index}
                order={order}
                index={index}
                refetch={refetch}
              ></ManageAllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;
