import "./SearchBar.css";
export default function SearchBar(props) {
  /*const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };*/

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for furniture" />
    </div>
  );
}
