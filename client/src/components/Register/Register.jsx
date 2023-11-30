import "./Register.css";
import useForm from "../../hooks/useForm";
import { useContext, useState } from "react";
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
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await onSubmit(values);
        setErrors({});
      } catch (e) {
        setErrors({ request: e.message });
      }
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username.trim()) {
      errors.username = "Username is required";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name={RegisterFormKeys.Username}
                value={values[RegisterFormKeys.Username]}
                onChange={onChange}
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
              />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="error-container">
        {Object.keys(errors).map((key) => (
          <span key={key} className="error-bubble">
            {errors[key]}
          </span>
        ))}
      </div>
    </div>
  );
}
