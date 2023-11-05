import "./Product.css";
export default function Product(props) {
  const addToCart = (e) => {
    console.log(props._id);
  };
  const showDetails = (e) => {
    console.log("works");
  };
  return (
    <div className="product">
      <img src={props.url} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="description">{props.description}</p>
      <p className="price">${props.price}</p>
      <div className="product-buttons">
        <button className="add-to-cart-button" onClick={addToCart}>
          Add to Cart
        </button>
        <button className="details-button" onClick={showDetails}>
          Details
        </button>
      </div>
    </div>
  );
}
