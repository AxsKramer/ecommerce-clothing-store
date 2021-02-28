import React from "react";
import {useDispatch} from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import Message from '../Message/Message';
import {registerUser} from '../../redux/actions/userActions';

const FormRegister = ({state, setState, initialState, showMessage, user, setshowMessage}) => {

  const dispatch = useDispatch();

  const {email, name, password, confirmPassword} = state;

  const handleSubmit =  (event) => {
    event.preventDefault();
    setshowMessage({error: false, message: ''});
    if(password !== confirmPassword){
      setshowMessage({error: true, message: 'Password does not match'});
      return;
    }
    dispatch(registerUser(email, password, name));
    setTimeout(() => setState(initialState), 3000);
  }

  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  return (
    <form onSubmit={handleSubmit}>
      {showMessage.error ? <Message isError>{showMessage.message}</Message> : null}
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
      <CustomButton type="submit">Sign up</CustomButton>
    </form>
  );
};

export default FormRegister;
