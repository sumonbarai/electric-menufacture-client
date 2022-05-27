import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../../shared/Spinner/Spinner";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51L3xcJIfDTDweZ47KPByb0iBDSH6jLHfNYSC3fpzjkuyi0pnkIlF4BITsursA6He6kHFzNFz7qwUk1UDkKa6ZrAJ00GBtIYb3U"
);

const Payment = () => {
  const { orderId } = useParams();
  const {
    isLoading,
    error,
    data: paymentOrder,
  } = useQuery("paymentOrder", () =>
    fetch(`https://agile-earth-47801.herokuapp.com/order/${orderId}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <section className="section-padding">
      <div className="tools-area container mx-auto px-4">
        <h2 className="section-title">Please payment your product</h2>
        <div className="all-product grid grid-cols-1 gap-4">
          <div className="card card-compact md:w-2/3 md:mx-auto bg-base-100 shadow-xl p-6">
            <div className="card-body pt-9">
              <p className="text-lg">
                <b>Product Name</b> : {paymentOrder.productName}
              </p>
              <p className="text-lg">
                <b>Order Quantity</b> : {paymentOrder.quantity}
              </p>
            </div>
          </div>
          <div className="card card-compact md:w-2/3 md:mx-auto bg-base-100 shadow-xl p-6">
            <div className="card-body pt-9">
              <Elements stripe={stripePromise}>
                <CheckOutForm paymentOrder={paymentOrder}></CheckOutForm>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
