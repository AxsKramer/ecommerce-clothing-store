import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import Message from '../Message/Message';

import {loginNormal, cleanState} from '../../redux/actions/userActions';

const FormLogin = ({state,setState}) => {

  const [showError, setshowError] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const initialState = { email: "", password: "" };

  useEffect(() => setshowError(user.errorMessage), [user.errorMessage]);

  const {email, password} = state;
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginNormal(email, password));
    setState(initialState)
  }
  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  if(showError){
    setTimeout(() => dispatch(cleanState()), 3000);
  }

  return (
    <form onSubmit={handleSubmit}>
      {showError ? <Message isError>{user.message}</Message> : null}
      <FormInput
        name="email"
        type="email"
        handleChange={handleChange}
        value={email}
        label="email"
        required
      />
      <FormInput
        name="password"
        type="password"
        handleChange={handleChange}
        value={password}
        label="password"
        required
      />
      <CustomButton type="submit">Sign in</CustomButton>
    </form>
  );
};

export default FormLogin;
