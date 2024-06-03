import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getSingleProduct } from "../../services/productService";
import Reviews from "../Reviews/Reviews";
import AuthContext from "../../contexts/authContext";
import { getReviews } from "../../services/reviewService";
import { deleteReview } from "../../services/reviewService";
import styles from "./Product.module.css";
import Newest from "../Newest/Newest";
import supabase from "../../config/supabaseClient";

export default function Product(props) {
  const { id } = useParams();
  const { isAuthenticated, userId, onCreateCartItem, cart } =
    useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [hasReviewed, setHasReviewed] = useState(true);
  const [reviews, setReviews] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const addToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdded(true);
    return onCreateCartItem(product.id);
  };
  const fetchProduct = async (id) => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("id", id)
      .single();
    if (data) {
      setProduct(data);
      const isAdded = cart?.find((ci) => ci.product_id == id);
      setIsAdded(isAdded);
    }
  };
  const fetchReviews = async (id) => {
    const { data, error } = await supabase
      .from("reviews")
      .select()
      .eq("product_id", id);

    if (data) {
      if (isAuthenticated) {
        if (data.find((r) => r.user_id == userId)) {
          setHasReviewed(true);
        } else {
          setHasReviewed(false);
        }
      }
      setReviews(data);
    }
  };
  useEffect(() => {
    fetchProduct(id);
    fetchReviews(id);
  }, [id]);

  const deleteHandler = async (e) => {
    const data = await deleteReview(e.target.id);
    setReviews((oldState) => [...oldState.filter((x) => x.id != e.target.id)]);
    setHasReviewed(false);
  };
  const goToReview = () => {
    navigate(`/product/${product.id}/add-review`);
  };

  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div className={styles["product-img"]}>
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className={styles["product-info"]}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          {isAuthenticated ? (
            <div className={styles.btns}>
              {!isAdded ? (
                <button onClick={(e) => addToCart(e)}>ADD TO CART</button>
              ) : (
                <Link to="/shopping-cart" className={styles.added}>
                  ALREADY ADDED TO <span className={styles.link}>CART</span>.
                </Link>
              )}
              {!hasReviewed ? (
                <button onClick={(e) => goToReview()}>LEAVE A REVIEW</button>
              ) : (
                ""
              )}
            </div>
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
