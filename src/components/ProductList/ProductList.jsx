import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { deleteProduct } from "../../services/productService.js";
import styles from "./ProductList.module.css";
import supabase from "../../config/supabaseClient.js";

export default function ProductList(props) {
  const [products, setProducts] = useState(null);

  const deleteProductHandler = async (e) => {
    await deleteProduct(e.target.parentNode.parentNode.parentNode.id);
    setProducts((oldState) =>
      oldState.filter(
        (x) => x.id !== e.target.parentNode.parentNode.parentNode.id
      )
    );
  };

  const fetchProducts = async (category) => {
    const { data, error } = await supabase.from("products").select();
    if (data) {
      if (category == "all") {
        setProducts(data);
      } else {
        const filteredData = data.filter((p) => p.category == category);
        setProducts(filteredData);
      }
    }
  };
  useEffect(() => {
    fetchProducts(props.category);
  }, [props, setProducts]);

  return (
    <div className={styles["product-list"]}>
      {products?.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            deleteProductHandler={deleteProductHandler}
            {...product}
          />
        ))
      ) : (
        <h3 className={styles.no}>No products matching the criteria.</h3>
      )}
    </div>
  );
}
