import React from "react";
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const FormRegister = ({state, setState}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(initialState);
  }

  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="name"
        type="name"
        handleChange={handleChange}
        value={state.name}
        label="name"
        required
      />
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
      <FormInput
        name="confirmPassword"
        type="password"
        handleChange={handleChange}
        value={state.password}
        label="confirm password"
        required
      />
      <CustomButton type="submit">Sign up</CustomButton>
    </form>
  );
};

export default FormRegister;
