import { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Product(props) {
  const { onBuy, isAuthenticated, cart } = useContext(AuthContext);
  const [hasBought, setHasBought] = useState(false);
  useEffect(() => {
    const isBought = cart?.cartItems.find((i) => i._id == props._id);
    setHasBought(isBought);
  }, [props]);

  return (
    <Link
      to={`/products/${props._id}`}
      className="product-link"
      style={{ textDecoration: "none" }}
    >
      <div className="product">
        <img src={props.imageUrl} alt={props.name} />
        <div className="info">
          <h3>{props.name}</h3>
          <p className="description">{props.description}</p>
          <p className="price">${props.price}</p>
          {isAuthenticated && !hasBought && (
            <div className="product-buttons">
              <button
                className="buy"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setHasBought(true);
                  return onBuy(props._id);
                }}
              >
                <i className="fas fa-shopping-bag"></i> Buy
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
