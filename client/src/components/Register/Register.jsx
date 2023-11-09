import { useEffect, useState } from "react";
import * as userServices from "../../services/userServices.js";

import "./Register.css";
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};
export default function Register(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onRegister = async (e) => {
    e.preventDefault();
    await userServices.register(formValues);
  };

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
              <label htmlFor="password">Repeat Password</label>
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                value={formValues.repeatPassword}
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
