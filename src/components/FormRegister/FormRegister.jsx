import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import Message from '../Message/Message';

import {registerUser, registerFail, logOut} from '../../redux/actions/userActions';

const FormRegister = ({state, setState}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(store => store.user)
  const {email, name, password, confirmPassword} = state;

  useEffect(() => {
    if(user.ok){
      setState({name:'', email: '', password: '', confirmPassword: ''});
      dispatch(logOut());
      history.push('/login');
    }
  },[user.ok] );

  const handleSubmit =  (event) => {
    event.preventDefault();

    if(email.trim() === '' || password.trim() === '' || name.trim() === ''){
      dispatch(registerFail('All fields are required'));
      return;
    }
    else if(password !== confirmPassword){
      dispatch(registerFail('Password does not match'));
      return;
    }
    dispatch(registerUser(name, email, password));
  }
  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  return (
    <form onSubmit={handleSubmit}>
      {user.errorMessage ? <Message isError>{user.errorMessage}</Message> : null}
      <FormInput
        name="name"
        type="name"
        handleChange={handleChange}
        value={name}
        label="name"
        required
      />
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
      <FormInput
        name="confirmPassword"
        type="password"
        handleChange={handleChange}
        value={confirmPassword}
        label="confirm password"
        required
      />
      <CustomButton type="submit">Create Account</CustomButton>
    </form>
  );
};

export default FormRegister;
