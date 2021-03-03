import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import ShoppingIcon from './ShoppingIcon';
import {toggleCartDropdown} from '../../redux/actions/cartActions';
import './CartIcon.scss';

const CartIcon = () => {

  const dispatch = useDispatch();
  const {cartItems} = useSelector(store => store.cart);

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartDropdown())}>
      <ShoppingIcon />
      <span className='item-count'>{cartItems.length}</span>
    </div>
  )
}

export default CartIcon
