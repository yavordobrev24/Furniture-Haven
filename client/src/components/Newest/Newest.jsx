import React from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/furnitureService";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./Newest.module.css";
function Newest() {
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
    <div className={styles.newest}>
      <h3>Newest</h3>
      <div className={styles["newest-list"]}>
        {newest.length > 0 &&
          Object.values(newest).map((newestItem) => (
            <ProductCard key={newestItem._id} {...newestItem} />
          ))}
      </div>
    </div>
  );
}

export default Newest;
