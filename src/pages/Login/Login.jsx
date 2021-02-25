import React, {useState} from 'react';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import {Link} from 'react-router-dom';
import './Login.scss';

const LoginPage = () => {

  const initialState = {email: '', password: ''};

  const [state, setState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(initialState);
  }

  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value});

  return (
    <section className='login-container'>
      <div className='login-image'></div>
      <div className='login-section'>
        <div className='login-form'>
          <h2 className='text-center'>Login</h2>
          <form onSubmit={handleSubmit}>
            <FormInput 
              name='email'
              type='email'
              handleChange={handleChange}
              value={state.email}
              label='email'
              required
            />
            <FormInput 
              name='password'
              type='password'
              handleChange={handleChange}
              value={state.password}
              label='password'
              required
            />
            <CustomButton type='submit'>Sign in</CustomButton>
          </form>
          <GoogleButton>Sign in with Google</GoogleButton>
          <p className='no-account'>You do not have an account? <Link to='/sign-up'>Sign up</Link></p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage;
