import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import GoogleButton from "../../components/GoogleButton/GoogleButton";
import FormLogin from "../../components/FormLogin/FormLogin";
import Spinner from '../../components/Spinner/Spinner';

import "./Login.scss";

const LoginPage = () => {

  const history = useHistory();
  const initialState = { email: "", password: "" };
  const [state, setState] = useState(initialState);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user.user) {
      history.push('/');
    }else{
    }
  }, [user.user]);

  return (
    <section className="login-container">
      <div className="login-image"></div>
      <div className="login-section">
        <div className="login-form">
          <h2 className="text-center">Login</h2>
          <FormLogin
            state={state}
            setState={setState}
          />
          <GoogleButton>Sign in with Google</GoogleButton>
          <p className="no-account">
            You do not have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      {
        user.isLoading ? <Spinner /> : null
      }
      </div>
    </section>
  );
};

export default LoginPage;
