import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useState } from 'react';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      if (submitError.message) {
        setErrorMessages([submitError.message]);
      }
      return;
    }
    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessages([error.message || 'An unknown error occurred']);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
    // Send paymentMethod.id to your server
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',

        margin: '0 auto',
      }}
    >
      <PaymentElement />
      <button type="submit">Pay</button>
      {errorMessages.map((message) => (
        <div key={message}>{message}</div>
      ))}
    </form>
  );
};

const Wrapper = () => {
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
  const options: StripeElementsOptions = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <div style={{ padding: '20px' }}>
      <Elements stripe={stripePromise} options={options}>
        <Payment />
      </Elements>
    </div>
  );
};

export default Wrapper;
