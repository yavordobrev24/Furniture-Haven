import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductCard.module.css";

export default function ProductCard(props) {
  const { onBuy, isAuthenticated, cart, isAdmin } = useContext(AuthContext);
  const [hasBought, setHasBought] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isBought = cart?.cartItems.find((i) => i._id === props._id);
    setHasBought(isBought);
  }, [props]);

  return (
    <Link to={`/product/${props._id}`} className={styles["product-card"]}>
      {isAuthenticated && isAdmin && (
        <div className="product-icons" id={props._id}>
          <span
            className="edit-icon"
            role="img"
            aria-label="Edit"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(`/edit-product/${props._id}`);
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span
            className="delete-icon"
            role="img"
            aria-label="Delete"
            onClick={(e) => {
              e.preventDefault();
              props.deleteProductHandler(e);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      )}
      <img src={props.imageUrl} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
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
    </Link>
  );
}
