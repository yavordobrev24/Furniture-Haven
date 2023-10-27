import "../../public/css/login.css";

export default function Login(props) {
  function onLogin(e) {
    console.log("Logged in");
  }
  return (
    <div className="auth-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit" onSubmit={onLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
