import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import {
  deleteProduct,
  getAllProducts,
} from "../../services/furnitureService.js";
import styles from "./ProductList.module.css";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);

  const deleteProductHandler = async (e) => {
    await deleteProduct(e.target.parentNode.parentNode.parentNode.id);
    setProducts((oldState) =>
      oldState.filter(
        (x) => x._id !== e.target.parentNode.parentNode.parentNode.id
      )
    );
  };

  async function fetchProducts(category) {
    const data = await getAllProducts();
    console.log(category);
    if (category == "all") {
      setProducts(data);
    } else {
      const filteredData = data.filter((item) => item.category == category);
      setProducts(filteredData);
    }
  }
  useEffect(() => {
    fetchProducts(props.category);
  }, [props, setProducts]);

  return (
    <div className={styles["product-list"]}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product._id}
            deleteProductHandler={deleteProductHandler}
            {...product}
          />
        ))
      ) : (
        <h2>No products matching the criteria.</h2>
      )}
    </div>
  );
}
