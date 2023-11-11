import "./ProductList.css";
import Product from "../Product/Product.jsx";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");

  const loadProducts = () => {
    fetch("http://localhost:3030/jsonstore/furniture")
      .then((res) => res.json())
      .then((data) => {
        const productsArray = Object.values(data);
        setProducts(productsArray);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchTerm !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (minPrice !== "") {
      result = result.filter(
        (p) => parseFloat(p.price) >= parseFloat(minPrice)
      );
    }

    if (maxPrice !== "") {
      result = result.filter(
        (p) => parseFloat(p.price) <= parseFloat(maxPrice)
      );
    }

    if (category !== "") {
      result = result.filter((p) => p.category === category);
    }

    return result;
  }, [searchTerm, minPrice, maxPrice, category, products]);

  return (
    <div className="product-page">
      <SearchBar
        searchTerm={searchTerm}
        minPrice={minPrice}
        maxPrice={maxPrice}
        category={category}
        setSearchTerm={setSearchTerm}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setCategory={setCategory}
      />
      <section className="product-list">
        {filteredProducts.length === 0 ? (
          <h2>No products matching the criteria.</h2>
        ) : (
          filteredProducts.map((x) => <Product key={x._id} {...x} />)
        )}
      </section>
    </div>
  );
}
