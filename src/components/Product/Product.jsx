import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";
import AuthContext from "../../contexts/authContext";
import { deleteReview } from "../../services/reviewService";
import styles from "./Product.module.css";
import Newest from "../Newest/Newest";
import supabase from "../../config/supabaseClient";

export default function Product(props) {
  const { id } = useParams();
  const { isAuthenticated, userId, addToCart, cart } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [hasReviewed, setHasReviewed] = useState(true);
  const [reviews, setReviews] = useState({});
  const navigate = useNavigate();

  const onAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    return addToCart(product);
  };
  const fetchProduct = async (id) => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("id", id)
      .single();
    if (data) {
      setProduct(data);
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
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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

          <div className={styles.btns}>
            <button onClick={(e) => onAdd(e)}>Add to cart</button>
            {isAuthenticated && !hasReviewed ? (
              <button onClick={() => goToReview()}>Leave a review</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Reviews reviews={reviews} deleteHandler={deleteHandler} />
      <Newest />
    </div>
  );
}
