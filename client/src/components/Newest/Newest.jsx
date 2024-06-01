import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../services/furnitureService";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./Newest.module.css";

export default function Newest() {
  const [newest, setNewest] = useState([]);

  const fetchNewest = async () => {
    const data = await getAllProducts();
    const newestData = data.slice(-4);
    setNewest(newestData);
  };

  const deleteProductHandler = async (id) => {
    await deleteProduct(id);
    fetchNewest();
  };

  useEffect(() => {
    fetchNewest();
  }, []);

  return (
    <>
      {newest.length > 0 && (
        <div className={styles.newest}>
          <h3>Newest</h3>
          <div className={styles["newest-list"]}>
            {newest.map((newestItem) => (
              <ProductCard
                key={newestItem._id}
                deleteProductHandler={() =>
                  deleteProductHandler(newestItem._id)
                }
                {...newestItem}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
