import { useEffect, useState } from "react";
import { register } from "../../services/userServices";

import "./Register.css";
import { Navigate } from "react-router-dom";
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function Register(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [registered, setRegistered] = useState(false);

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onRegister = async (e) => {
    e.preventDefault();
    await register(formValues);
    setRegistered(true);
  };
  if (registered) {
    return <Navigate to="/" />;
  }
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={onRegister}>
          <div className="form-inputs">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formValues.username}
                onChange={changeHandler}
                /*onBlur={validateHandler}*/
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formValues.email}
                onChange={changeHandler}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={changeHandler}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={changeHandler}
                required
              />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
