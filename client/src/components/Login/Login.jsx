import { useState } from "react";
import "./Login.css";
const initialFormValues = {
  email: "",
  password: "",
};
export default function Login(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = (e) => {
    console.log(formValues);
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formValues.email}
            onChange={changeHandler}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={changeHandler}
            required
          />
          <button type="submit" onSubmit={onLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
