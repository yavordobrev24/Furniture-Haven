import "./ProductList.css";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import {
  deleteProduct,
  getAllProducts,
} from "../../services/furnitureService.js";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");

  const deleteProductHandler = async (e) => {
    console.log(e.target.parentNode.parentNode.parentNode.id);
    await deleteProduct(e.target.parentNode.parentNode.parentNode.id);
    setProducts((oldState) =>
      oldState.filter(
        (x) => x._id !== e.target.parentNode.parentNode.parentNode.id
      )
    );
  };

  async function fetchProducts(category) {
    const data = await getAllProducts();

    setProducts(data);
  }
  useEffect(() => {
    console.log(props.category);
    fetchProducts(props.category);
  }, [props]);

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
      result = result.filter((p) => p.category == category);
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
      />
      <section className="product-list">
        {filteredProducts.length === 0 ? (
          <h2>No products matching the criteria.</h2>
        ) : (
          filteredProducts.map((x) => (
            <ProductCard
              key={x._id}
              deleteProductHandler={deleteProductHandler}
              {...x}
            />
          ))
        )}
      </section>
    </div>
  );
}
