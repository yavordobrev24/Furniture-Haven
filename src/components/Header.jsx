import "../../public/css/header.css";
export default function Header(props) {
  return (
    <header>
      <nav>
        <div className="logo">Your Logo</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
        <div className="cart">
          <a href="#">
            <i className="fas fa-shopping-cart"></i> (0)
          </a>
        </div>
      </nav>
    </header>
  );
}
