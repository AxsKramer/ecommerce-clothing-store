import React from "react";
import {Link} from 'react-router-dom';
import './Networks.scss';

const Networks = () => {
  return (
    <section className="networks-section">
      <h2>Follow us</h2>
      <div className="networks">
        <Link to="/https://www.facebook.com/">
          <i className="fab fa-facebook"></i>
        </Link>
        <Link to="/https://www.pinterest.com.mx/">
          <i className="fab fa-pinterest"></i>
        </Link>
        <Link to="/https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="/https://www.youtube.com/">
          <i className="fab fa-youtube"></i>
        </Link>
      </div>
    </section>
  );
};

export default Networks;
