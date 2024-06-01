import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductCard.module.css";

export default function ProductCard(props) {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Link to={`/product/${props._id}`} className={styles["product-card"]}>
      {isAuthenticated && isAdmin && (
        <div className={styles["action-icons"]} id={props._id}>
          <span
            className={styles.edit}
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
            className={styles.delete}
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
      </div>
    </Link>
  );
}
