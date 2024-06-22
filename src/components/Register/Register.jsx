import styles from "./Register.module.css";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import Button from "../Button/Button";
const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
};
export default function Register(props) {
  const { onRegister } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(onRegister, {
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
        setErrors({ request: "Email already exists" });
      }
    }
  };

  const validate = (values) => {
    const errors = {};

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
    <div className={styles.register}>
      <div className={styles.form}>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              name={RegisterFormKeys.Email}
              value={values[RegisterFormKeys.Email]}
              onChange={onChange}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name={RegisterFormKeys.Password}
              value={values[RegisterFormKeys.Password]}
              onChange={onChange}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              name={RegisterFormKeys.ConfirmPassword}
              value={values[RegisterFormKeys.ConfirmPassword]}
              onChange={onChange}
            />
          </div>
         <Button>Register</Button>
        </form>
        <p>
          Already have an account? <Link to="/login" className={styles.login}>Login</Link>
        </p>
      </div>
      <div className={styles.errors}>
        {Object.keys(errors).map((key) => (
          <span key={key} className={styles.error}>
            {errors[key]}
          </span>
        ))}
      </div>
    </div>
  );
}
