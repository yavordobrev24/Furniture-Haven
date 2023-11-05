import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    // Pass searchTerm, minPrice, and maxPrice to the parent component for filtering
    props.onSearch(searchTerm, minPrice, maxPrice);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for furniture"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
