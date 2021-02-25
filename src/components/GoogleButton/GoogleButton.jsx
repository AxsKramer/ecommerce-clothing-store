import React from "react";
import './GoogleButton.scss';

const GoogleButton = ({children}) => {
  return (
    <button className='google-btn'>
      <i className="fab fa-google"></i>
      <span>{children}</span>
    </button>
  );
};

export default GoogleButton;
