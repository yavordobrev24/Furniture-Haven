import "./Product.css";
import { Link } from "react-router-dom";

export default function Product(props) {
  const onBuy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Buy button clicked for product:", props.name);
    // Add your buy functionality here
  };

  return (
    <Link
      to={`/details/${props._id}`}
      className="product-link"
      style={{ textDecoration: "none" }}
    >
      <div
        className="product"
        onClick={() => console.log("Card clicked for product:", props.name)}
      >
        <img src={props.imageUrl} alt={props.name} />
        <div className="info">
          <h3>{props.name}</h3>
          <p className="description">{props.description}</p>
          <p className="price">${props.price}</p>

          <div className="product-buttons">
            <button className="buy" onClick={onBuy}>
              <i className="fas fa-shopping-bag"></i> Buy
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
