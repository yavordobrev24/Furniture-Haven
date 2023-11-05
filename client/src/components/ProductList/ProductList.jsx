import "./ProductList.css";
import Product from "../Product/Product.jsx";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/furniture")
      .then((res) => res.json())
      .then((data) => {
        setProducts([]);
        Object.values(data).forEach((x) => {
          setProducts((y) => [...y, x]);
          console.log(x);
        });
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <SearchBar />
      <section className="product-list">
        {products?.length > 0 ? (
          <>
            {products.map((x) => (
              <Product key={x._id} {...x} />
            ))}
          </>
        ) : (
          <h2>There is currently no furniture in stock</h2>
        )}
      </section>
    </>
  );
}
