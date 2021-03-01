import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomButtom from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import "./CartDropdowns.scss";

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  console.log(cart.cartItems);

  const goToCheckout = () => {
    history.push("/checkout");
    // dispatch()
  };

  return (
    <div className={` cart-dropdown ${cart.cartItems.length === 0 ? 'no-items' : ''} `}>
      <div className={` cart-items ${cart.cartItems.length === 0 ? 'no-overflow' : ''} `}>
        {cart.cartItems.length ? (
          <>
          cart.cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
            ))
            <CustomButtom onClick={goToCheckout}>GO TO CHECK OUT</CustomButtom>
          </>
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
