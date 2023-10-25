import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">Your Logo</div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
          <div class="cart">
            <a href="#">
              <i class="fas fa-shopping-cart"></i> (0)
            </a>
          </div>
        </nav>
      </header>
      {/*<Home />*/}
      {/*<Register />*/}
      <Login />
      <footer>
        <div className="footer-logo">Your Logo</div>
        <ul className="footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
