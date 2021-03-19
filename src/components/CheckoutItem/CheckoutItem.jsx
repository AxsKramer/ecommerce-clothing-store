import React from "react";
import { useDispatch } from "react-redux";

import {
  addItem,
  removeItem,
  cleanItemFromCart,
} from "../../redux/actions/cartActions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name description">{name}</span>
      <span className="quantity">
        {
          quantity !== 1 &&
            <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
                &#10094;
              </div>
        }
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(cleanItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
