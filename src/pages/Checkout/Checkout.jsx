import React from 'react';
import {useSelector} from 'react-redux';

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
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block description">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        <div className='items-container'>
          {
            cartItems.length >= 1
              ? cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
              : <span className='no-products'>No Products</span>
          }
        </div>
        {
          cartItems.length >= 1 ? <div className="total">TOTAL: $ {total}</div> : null
        }
      </div>
    </section>
  )
}


export default CheckoutPage
