import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header(props) {
  const { isAuthenticated, cart } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <div className="logo">Furniture Heaven</div>
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
        </ul>
        {isAuthenticated && (
          <div className="cart">
            <Link to="/shopping-cart">
              {cart?.cartItems ? cart.cartItems.length : 0}
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        )}
        <div className="profile-dropdown">
          <i className="fas fa-user"></i>
          <div className="dropdown-content">
            {!isAuthenticated && (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link to="/logout">Logout</Link>
                <Link to="/profile">Profile</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
