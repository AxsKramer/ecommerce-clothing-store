import React from "react";
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const FormLogin = ({state,setState}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setState(initialState);
  }
  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="email"
        type="email"
        handleChange={handleChange}
        value={state.email}
        label="email"
        required
      />
      <FormInput
        name="password"
        type="password"
        handleChange={handleChange}
        value={state.password}
        label="password"
        required
      />
      <CustomButton type="submit">Sign in</CustomButton>
    </form>
  );
};

export default FormLogin;
