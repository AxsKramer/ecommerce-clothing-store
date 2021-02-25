import React, {useState} from 'react';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import {Link} from 'react-router-dom';
import FormLogin from '../../components/FormLogin/FormLogin';
import './Login.scss';

const LoginPage = () => {

  const initialState = {email: '', password: ''};
  const [state, setState] = useState(initialState);

  return (
    <section className='login-container'>
      <div className='login-image'></div>
      <div className='login-section'>
        <div className='login-form'>
          <h2 className='text-center'>Login</h2>
          <FormLogin state={state} setState={setState}/>
          <GoogleButton>Sign in with Google</GoogleButton>
          <p className='no-account'>You do not have an account? <Link to='/sign-up'>Sign up</Link></p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage;
