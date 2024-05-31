import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/furnitureService";
import ProductCard from "../ProductCard/ProductCard.jsx";

export default function Home() {
  const [newest, setNewest] = useState([]);
  const fetchNewest = async () => {
    const data = await getAllProducts();
    const newestData = data.slice(-4);
    setNewest(newestData);
  };
  useEffect(() => {
    fetchNewest();
    console.log(newest);
  }, []);
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
      <div className={styles.newest}>
        <h3>Newest</h3>
        <div className={styles["newest-list"]}>
          {newest.length > 0 &&
            Object.values(newest).map((newestItem) => (
              <ProductCard key={newestItem._id} {...newestItem} />
            ))}
        </div>
      </div>
    </div>
  );
}
