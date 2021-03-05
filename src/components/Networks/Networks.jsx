import React from "react";
import {Link} from 'react-router-dom';
import './Networks.scss';

const Networks = () => {
  return (
    <section className="networks-section">
      <h2>Follow us</h2>
      <div className="networks">
        <Link to="/https://www.facebook.com/" title='Facebook'>
          <i className="fab fa-facebook"></i>
        </Link>
        <Link to="/https://www.pinterest.com.mx/" title='Pinterest'>
          <i className="fab fa-pinterest"></i>
        </Link>
        <Link to="/https://www.instagram.com/" title='Instagram'>
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="/https://www.youtube.com/" title='Youtube'>
          <i className="fab fa-youtube"></i>
        </Link>
      </div>
    </section>
  );
};

export default Networks;
