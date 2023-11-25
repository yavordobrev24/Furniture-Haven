import { useParams, Link } from "react-router-dom";
import "./Details.css";
import { useContext, useEffect, useState } from "react";
import { getSingleProduct } from "../../services/furnitureService";
import ReviewList from "../ReviewList/ReviewList";
import AuthContext from "../../contexts/authContext";
import { getProductReviews } from "../../services/reviewService";
import { deleteReview } from "../../services/reviewService";

export default function Details(props) {
  const { id } = useParams();
  const { isAuthenticated, userId, onBuy, cart } = useContext(AuthContext);
  const [furnitureData, setFurnitureData] = useState({});
  const [hasReviewed, setHasReviewed] = useState(true);
  const [reviews, setReviews] = useState({});
  const [hasBought, setHasBought] = useState(false);
  const fetchProduct = async (id) => {
    const data = await getSingleProduct(id);
    setFurnitureData(data);
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
    <div className="furniture-details-page">
      <div className="details-info">
        <div className="furniture-image">
          <img src={furnitureData.imageUrl} alt={furnitureData.name} />
        </div>
        <div className="furniture-details">
          <h1>{furnitureData.name}</h1>
          <p className="price">${furnitureData.price}</p>
          <p className="description">{furnitureData.description}</p>
          <div className="furniture-buttons">
            {isAuthenticated && !hasBought && (
              <button
                className="buy-button"
                onClick={() => {
                  setHasBought(true);
                  return onBuy(furnitureData._id);
                }}
              >
                <i className="fas fa-shopping-bag"></i> Buy
              </button>
            )}
            {isAuthenticated && hasReviewed && (
              <Link to={`/products/${id}/add-review`}>
                <button className="add-review-button">Add Review</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ReviewList reviews={reviews} deleteHandler={deleteHandler} />
    </div>
  );
}
