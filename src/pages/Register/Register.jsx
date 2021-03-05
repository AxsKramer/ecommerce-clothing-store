import React, {useState, useEffect} from 'react';
import FormRegister from '../../components/FormRegister/FormRegister';
import {useSelector} from 'react-redux';
import './Register.scss';
import Spinner from '../../components/Spinner/Spinner';

const RegisterPage = () => {
  const initialState = {name:'', email: '', password: '', confirmPassword: ''};
  const [state, setState] = useState(initialState);

  const [showMessage, setshowMessage] = useState({
    error: false,
    message: ''
  });
  const user = useSelector(store => store.user);
  
  useEffect(() => {
    if(user.error){
      setshowMessage({error: true, message: user.message});
    }
  },[user.error, user.message])

  return (
    <section className='register-container'>
      <div className='register-image'></div>
      <div className='register-section'>
        <div className='register-form'>
          <h2>Sign up</h2>
          <FormRegister user={user} state={state} setState={setState} showMessage={showMessage} setshowMessage={setshowMessage}/>
        </div>
        {
          user.isLoading && <Spinner />
        }
      </div>
    </section>
  )
}

export default RegisterPage;
