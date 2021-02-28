import React from "react";
import {useDispatch} from 'react-redux';
import {loginUserByGoogle} from '../../redux/actions/userActions';
import './GoogleButton.scss';

const GoogleButton = ({children}) => {

  const dispatch = useDispatch();
  
  return (
    <button className='google-btn' onClick={() => dispatch(loginUserByGoogle())}>
      <i className="fab fa-google"></i>
      <span>{children}</span>
    </button>
  );
};

export default GoogleButton;
