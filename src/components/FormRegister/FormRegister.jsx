import React from "react";
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth, createUserProfileDocument} from '../../firebase';

const FormRegister = ({state, setState, initialState}) => {

  const {email, name, password, confirmPassword} = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName: name});
      setState(initialState);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  return (
    <form onSubmit={handleSubmit}>
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
