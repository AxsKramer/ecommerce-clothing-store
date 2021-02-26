import React from "react";
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth} from '../../firebase';

const FormLogin = ({state,setState, initialState}) => {

  const {email, password} = state;
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
    setState(initialState);
  }
  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  return (
    <form onSubmit={handleSubmit}>
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
