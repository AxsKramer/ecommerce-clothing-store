import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import ShoppingIcon from './ShoppingIcon';
import './CartIcon.scss';


const CartIcon = () => {

  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  return (
    <div className='cart-icon' >
      <ShoppingIcon />
      <span className='item-count'>2</span>
    </div>
  )
}

export default CartIcon
