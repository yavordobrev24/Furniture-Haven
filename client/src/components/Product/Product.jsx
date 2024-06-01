import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getSingleProduct } from "../../services/furnitureService";
import Reviews from "../Reviews/Reviews";
import AuthContext from "../../contexts/authContext";
import { getProductReviews } from "../../services/reviewService";
import { deleteReview } from "../../services/reviewService";
import styles from "./Product.module.css";
import Newest from "../Newest/Newest";

export default function Product(props) {
  const { id } = useParams();
  const { isAuthenticated, userId, onBuy, cart } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [hasReviewed, setHasReviewed] = useState(true);
  const [reviews, setReviews] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const addToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdded(true);
    return onBuy(product._id);
  };
  const fetchProduct = async (id) => {
    const data = await getSingleProduct(id);
    setProduct(data);
    const isAdded = cart?.cartItems.find((i) => i._id == id);
    setIsAdded(isAdded);
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
  const goToReview = () => {
    navigate(`/product/${product._id}/add-review`);
  };

  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div className={styles["product-img"]}>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className={styles["product-info"]}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          {isAuthenticated ? (
            !isAdded ? (
              <div className={styles.btns}>
                <button onClick={(e) => addToCart(e)}>ADD TO CART</button>
                {hasReviewed ? (
                  <button onClick={(e) => goToReview()}>LEAVE A REVIEW</button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <p className={styles.added}>
                Already added to{" "}
                <Link to="/shopping-cart" className={styles.link}>
                  cart
                </Link>
                .
              </p>
            )
          ) : (
            <p className={styles.login}>
              <Link to="/login" className={styles.link}>
                Login
              </Link>{" "}
              to add to cart.
            </p>
          )}
        </div>
      </div>
      <Reviews reviews={reviews} deleteHandler={deleteHandler} />
      <Newest />
    </div>
  );
}
