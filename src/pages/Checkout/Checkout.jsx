import React from 'react';
import {useSelector} from 'react-redux';
import StripeCheckoutButton from '../../components/Stripe/StripeButton';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.scss';

const CheckoutPage = () => {

  const cartItems = useSelector(store => store.cart.cartItems);
  let total = 0;
    if(cartItems.length){
      total = cartItems.reduce((accum, currentValue) => accum + (currentValue.price * currentValue.quantity),0); 
    }

  return (
    <section className='checkout-page'>
      <div className="checkout-container">
        <div className="checkout-header">
          {
            ['Product', 'Description', 'Quantity', 'Price', 'Remove' ].map(option => (
              <div key={option} className={`header-block ${option === 'Description' ? 'description' : null }`}>
                <span>{option}</span>
              </div>
            ))
          }
        </div>
        <div className='items-container'>
          {
            cartItems.length >= 1
              ? cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
              : <span className='no-products'>No Products</span>
          }
        </div>
        {
          cartItems.length >= 1 ? (
            <>
            <div className='test-card'>
              <p>*** Please use the following test credit card for testing payments ***</p>
              <p>4242 4242 4242 4242 - Exp: 12/24 - CVV: 123</p>
            </div>
            <div className="total">
              <p>TOTAL: $ {total}</p>
              <StripeCheckoutButton price={total}/>
            </div>
            </>
          ) : null
        }
      </div>
    </section>
  )
}


export default CheckoutPage
