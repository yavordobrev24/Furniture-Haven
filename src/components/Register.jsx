export default function Register() {
  return (
    <div className="auth-container">
      <div className="login-register-forms">
        <div className="register-form">
          <h2>Register</h2>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required="" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required="" />
            <label htmlFor="password">Repeat Password</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              required=""
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
