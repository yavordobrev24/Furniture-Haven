import "./Product.css";
import { Link } from "react-router-dom";
export default function Product(props) {
  const addToCart = (e) => {
    console.log(props._id);
  };
  return (
    <div className="product">
      <img src={props.imageUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="description">{props.description}</p>
      <p className="price">${props.price}</p>
      <div className="product-buttons">
        <button className="add-to-cart-button" onClick={addToCart}>
          Add to Cart
        </button>
        <Link to={`/details/${props._id}`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
}
