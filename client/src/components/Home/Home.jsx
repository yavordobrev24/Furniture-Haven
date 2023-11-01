import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Online Store</h1>
          <p>Shop the best products at amazing prices.</p>
          <Link to="/products" className="shop-now-button">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
