import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories/all" state={{ category: "all" }}>
          All
        </Link>
        <Link to="/categories/kitchen" state={{ category: "kitchen" }}>
          Kitchen
        </Link>
        <Link to="/categories/living-room" state={{ category: "living-room" }}>
          Living room
        </Link>
        <Link to="/categories/bedroom" state={{ category: "bedroom" }}>
          Bedroom
        </Link>
      </nav>
    </div>
  );
}
