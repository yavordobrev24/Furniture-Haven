import { useState } from "react";
import "./Login.css";
import { login } from "../../services/userServices";
import { Navigate } from "react-router-dom";
const initialFormValues = {
  email: "",
  password: "",
};
export default function Login(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [logged, setLogged] = useState(false);
  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    await login(formValues);
    setLogged(true);
  };
  if (logged) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={onLogin}>
          <div className="form-inputs">
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
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
