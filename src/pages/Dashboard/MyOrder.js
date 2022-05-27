import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderRow from "./OrderRow";
import Spinner from "../../shared/Spinner/Spinner";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("myOrder", () => {
    return fetch(
      `https://agile-earth-47801.herokuapp.com/myOrder?email=${user?.email}`
    ).then((res) => res.json());
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center uppercase mb-8">
        Your total Order({orders.length})
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
              <th>Order Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <OrderRow
                key={index}
                order={order}
                index={index}
                refetch={refetch}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
