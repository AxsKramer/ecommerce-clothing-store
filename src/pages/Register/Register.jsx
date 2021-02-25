import React, {useState} from 'react';
import FormRegister from '../../components/FormRegister/FormRegister';
import './Register.scss';

const RegisterPage = () => {
  const initialState = {name:'', email: '', password: '', confirmPassword: ''};
  const [state, setState] = useState(initialState);

  return (
    <section className='register-container'>
      <div className='register-image'></div>
      <div className='register-section'>
        <div className='register-form'>
          <h2>Sign up</h2>
          <FormRegister state={state} setState={setState} />
        </div>
      </div>
    </section>
  )
}

export default RegisterPage;
