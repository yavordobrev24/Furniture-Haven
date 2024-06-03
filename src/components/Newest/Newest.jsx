import React, { useEffect, useState } from "react";
import { deleteProduct } from "../../services/productService";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./Newest.module.css";
import supabase from "../../config/supabaseClient.js";

export default function Newest() {
  const [products, setProducts] = useState(null);
  const fetchNewest = async () => {
    const { data } = await supabase.from("products").select();

    if (data) {
      setProducts(data.slice(-4));
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
