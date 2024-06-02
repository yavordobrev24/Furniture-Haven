import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <nav>
        <Link to="/">About</Link>
        <Link to="/">Store Location</Link>
        <Link to="/">FAQs</Link>
        <Link to="/">News</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Contact Us</Link>
      </nav>
    </div>
  );
}
