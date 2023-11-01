import "./Register.css";
export default function Register(props) {
  function onRegister(e) {
    console.log("Registered");
  }
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="password">Repeat Password</label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            required
          />
          <button type="submit" onSubmit={onRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
