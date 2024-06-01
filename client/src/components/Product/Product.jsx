import { useParams, Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { getSingleProduct } from "../../services/furnitureService";
import ReviewList from "../ReviewList/ReviewList";
import AuthContext from "../../contexts/authContext";
import { getProductReviews } from "../../services/reviewService";
import { deleteReview } from "../../services/reviewService";
import styles from "./Product.module.css";

export default function Product(props) {
  const { id } = useParams();
  const { isAuthenticated, userId, onBuy, cart } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [hasReviewed, setHasReviewed] = useState(true);
  const [reviews, setReviews] = useState({});
  const [hasBought, setHasBought] = useState(false);
  const fetchProduct = async (id) => {
    const data = await getSingleProduct(id);
    setProduct(data);
    const isBought = cart?.cartItems.find((i) => i._id == id);
    setHasBought(isBought);
  };
  const fetchReviews = async (id) => {
    const data = await getProductReviews(id);
    if (isAuthenticated) {
      if (data.find((r) => r._ownerId === userId)) {
        setHasReviewed(false);
      } else {
        setHasReviewed(true);
      }
    }
    setReviews(data);
  };
  useEffect(() => {
    fetchProduct(id);
    fetchReviews(id);
  }, [id]);

  const deleteHandler = async (e) => {
    await deleteReview(e.target.id);
    setReviews((oldState) => oldState.filter((x) => x._id !== e.target.id));
    setHasReviewed(true);
  };
  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div className={styles["product-img"]}>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className={styles["product-info"]}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>
      <ReviewList reviews={reviews} deleteHandler={deleteHandler} />
    </div>
  );
}
