import React from "react";
import {signInWithGoogle} from '../../firebase';
import './GoogleButton.scss';

const GoogleButton = ({children}) => {
  return (
    <button className='google-btn' onClick={signInWithGoogle}>
      <i className="fab fa-google"></i>
      <span>{children}</span>
    </button>
  );
};

export default GoogleButton;
