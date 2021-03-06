import React, {  useState } from "react";
import { useSelector } from "react-redux";

import FormRegister from "../../components/FormRegister/FormRegister";
import Spinner from "../../components/Spinner/Spinner";

import "./Register.scss";

const RegisterPage = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [state, setState] = useState(initialState);
  const user = useSelector((store) => store.user);

  return (
    <section className="register-container">
      <div className="register-image"></div>
      <div className="register-section">
        <div className="register-form">
          <h2>Sign up</h2>
          <FormRegister
            state={state}
            setState={setState}
          />
        </div>
        {user.isLoading && <Spinner />}
      </div>
    </section>
  );
};

export default RegisterPage;
