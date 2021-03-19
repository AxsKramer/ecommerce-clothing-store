import React from "react";
import './Shipping.scss';

const Shipping = () => {
  return (
    <section className="shipping">
      <div className="shipping-details">
        <h2>Free shipping.</h2>
        <p>On orders over $ 100 USD</p>
      </div>
      <i className="fas fa-shipping-fast car"></i>
      <i className="fas fa-house-user house"></i>
    </section>
  );
};

export default Shipping;
