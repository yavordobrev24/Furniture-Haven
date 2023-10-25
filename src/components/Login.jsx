export default function Login() {
  return (
    <div className="auth-container">
      <div className="login-register-forms">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
