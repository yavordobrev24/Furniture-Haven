import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../services/furnitureService";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./Newest.module.css";
import supabase from "../../config/supabaseClient.js";

export default function Newest() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const fetchNewest = async () => {
    const { data, error } = await supabase.from("products").select();
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      setProducts(data);
    }
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
      {products?.length > 0 && (
        <div className={styles.newest}>
          <h3>Newest</h3>
          <div className={styles["newest-list"]}>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                deleteProductHandler={() => deleteProductHandler(p.id)}
                {...p}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
