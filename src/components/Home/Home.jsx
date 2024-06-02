import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Newest from "../Newest/Newest";
import supabase from "../../config/supabaseClient";

export default function Home() {
  console.log(supabase);
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
      <Newest />
    </div>
  );
}
