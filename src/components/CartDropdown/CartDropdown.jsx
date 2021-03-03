import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomButtom from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import {toggleCartDropdown} from '../../redux/actions/cartActions';
import {cleanCart} from '../../redux/actions/cartActions';
import "./CartDropdowns.scss";

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const goToCheckout = () => {
    history.push("/checkout");
    dispatch(toggleCartDropdown())
  };

  return (
    <div className={` cart-dropdown ${cart.cartItems.length === 0 ? 'no-items' : ''} `}>
      <div className={` cart-items ${cart.cartItems.length === 0 ? 'no-overflow' : ''} `}>
        {cart.cartItems.length !== 0
          ? cart.cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-message">Your cart is empty</span>
        }
      </div>
        {
          cart.cartItems.length !== 0 && (
            <div className='buttons'>
            <CustomButtom onClick={goToCheckout}>CHECK OUT</CustomButtom>
            <CustomButtom style={{background: '#4a00e0'}} onClick={() => dispatch(cleanCart())}>CLEAN CART</CustomButtom>
            </div>
          )
        }
    </div>
  );
};

export default CartDropdown;
