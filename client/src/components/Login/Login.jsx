import styles from "./Login.module.css";
import useForm from "../../hooks/useForm";
import { useContext, useState } from "react";
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

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name={LoginFormKeys.Email}
              value={values[LoginFormKeys.Email]}
              onChange={onChange}
              placeholder="Demo: yavor@gmail.com"
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={onChange}
              placeholder="Demo: 123456"
            />
          </div>
          <button type="submit">Login</button>
        </form>
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
