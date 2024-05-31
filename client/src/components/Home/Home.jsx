import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.categories}>
        <Link className={styles["category-card"]} to="/categories/kitchen">
          <span>Kitchen</span>
        </Link>
        <Link className={styles["category-card"]} to="/categories/living-room">
          <span>Living room</span>
        </Link>
        <Link className={styles["category-card"]} to="/categories/bedroom">
          <span>Bedroom</span>
        </Link>
      </div>
    </div>
  );
}
