import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IS83TB5UVYqn6AMsjYq49fge5dyHzoibW64WnvJ3qMs5o4PrwEEHSSaSv3gzbIdNkxtHXkFs2j3jKkq4ZZPYgbK00iystoDZt';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label= 'Pay Now.'
      name= 'Wolves Army Ltd.'
      billingAddress
      shippingAddress
      description= {`Your total is $ ${price}`}
      amount= {priceForStripe}
      panelLabel='Pay Noww'
      token={onToken}
      stripeKey= {publishableKey}
      currency="USD"
    />
  )
}

export default StripeCheckoutButton;
