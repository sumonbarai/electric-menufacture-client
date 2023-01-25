import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ paymentOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecrect, setClientSecrect] = useState("");
  const price =
    parseFloat(paymentOrder.price) * parseFloat(paymentOrder.quantity);

  useEffect(() => {
    fetch(
      `https://electric-manufacture-server.onrender.com/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecrect(data?.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    // confirm payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecrect, {
        payment_method: {
          card: card,
          billing_details: {
            email: paymentOrder.email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setSuccess("");
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("!Congratulation payment success");
      // set order collection status and transaction id set
      const url = `https://electric-manufacture-server.onrender.com/order/${paymentOrder._id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "pending",
          transactionId: paymentIntent.id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-secondary btn-sm mt-4"
            type="submit"
            disabled={!stripe || !clientSecrect}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}
        {success && (
          <div>
            <p className="text-green-500">{success}</p>
            <p className="text-green-500">
              <b>Transaction Id:</b>
              <span className="text-orange-500">{transactionId}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckOutForm;
