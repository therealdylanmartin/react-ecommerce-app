import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KOsCiDg95MrvrmOUz3iOtqzYbfjGmge4C3npgRyU12gxa5tV7Dc5lfd4YgZ5QjxPMPUXEEgPrSYWVW2GI5nsDIi00FCfg5ymH';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return(
    <StripeCheckout 
      label="Pay Now" 
      name="CRWN Clothing Ltd." 
      billingAddress 
      shippingAddress 
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`} 
      amount={priceForStripe} 
      panelLabel="Pay Now" 
      token={onToken} 
      stripeKey={publishableKey} 
    />
  )
}

export default StripeCheckoutButton;
