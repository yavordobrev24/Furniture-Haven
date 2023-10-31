import "../../public/css/header.css";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header>
      <nav>
        <div className="logo">
          <strong>Furniture Heaven</strong>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
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
