import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar(props) {
  const navigate = useNavigate();
  const onSelect = (e) => {
    props.setCategory(e.target.value);
    if (e.target.value === "") {
      navigate("/products");
    } else {
      navigate(`/products/${e.target.value}`);
    }
  };
  return (
    <div className="search-bar">
      <div className="search-div">
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search for furniture"
          value={props.searchTerm}
          onChange={(e) => {
            props.setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="price-div">
        <h2>Price</h2>
        <div>
          <input
            type="number"
            placeholder="Min Price"
            value={props.minPrice}
            onChange={(e) => props.setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={props.maxPrice}
            onChange={(e) => props.setMaxPrice(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
