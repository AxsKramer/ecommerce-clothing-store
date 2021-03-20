import React from "react";
import './Networks.scss';

const Networks = () => {
  return (
    <section className="networks-section">
      <h2>Follow us</h2>
      <div className="networks">
        <a href="https://www.facebook.com/" title='Facebook' rel="noreferrer" rel="noopener" target='_blank'>
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.pinterest.com.mx/" title='Pinterest' rel="noreferrer" rel="noopener" target='_blank'>
          <i className="fab fa-pinterest"></i>
        </a>
        <a href="https://www.instagram.com/" title='Instagram' rel="noreferrer" rel="noopener" target='_blank'>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/" title='Youtube' rel="noreferrer" rel="noopener" target='_blank'>
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </section>
  );
};

export default Networks;
