import "./Register.css";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
const RegisterFormKeys = {
  Username: "username",
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
};
export default function Register(props) {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <div className="form-inputs">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name={RegisterFormKeys.Username}
                value={values[RegisterFormKeys.Username]}
                onChange={onChange}
                /*onBlur={validateHandler}*/
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name={RegisterFormKeys.Email}
                value={values[RegisterFormKeys.Email]}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name={RegisterFormKeys.Password}
                value={values[RegisterFormKeys.Password]}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name={RegisterFormKeys.ConfirmPassword}
                value={values[RegisterFormKeys.ConfirmPassword]}
                onChange={onChange}
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
