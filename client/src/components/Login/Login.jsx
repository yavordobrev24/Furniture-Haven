import "./Login.css";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
const LoginFormKeys = {
  Email: "email",
  Password: "password",
};
export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div className="form-inputs">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name={LoginFormKeys.Email}
                value={values[LoginFormKeys.Email]}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name={LoginFormKeys.Password}
                value={values[LoginFormKeys.Password]}
                onChange={onChange}
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
