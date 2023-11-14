import { useParams, Link } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../services/furnitureService";
import ReviewCard from "../ReviewCard/ReviewCard";
import { getProductReviews } from "../../services/reviewService";

export default function Details(props) {
  const { id } = useParams();
  const [furnitureData, setFurnitureData] = useState({});
  const [reviews, setReviews] = useState({});
  const fetchProduct = async (id) => {
    const data = await getSingleProduct(id);
    setFurnitureData(data);
  };
  const fetchReviews = async (id) => {
    const data = await getProductReviews(id);
    setReviews(data);
  };
  useEffect(() => {
    fetchProduct(id);
    fetchReviews(id);
  }, [id]);

  const handleAddReview = () => {
    // Implement the logic to open a review form or a modal for adding a new review
    // You can use state or a library like React-Modal for this purpose
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
            <button className="buy-button">
              <i className="fas fa-shopping-bag"></i> Buy
            </button>
            <Link to={`/products/${id}/add-review`}>
              <button className="add-review-button" onClick={handleAddReview}>
                Add Review
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <div className="review-list">
          {reviews?.length > 0 ? (
            reviews.map((review) => <ReviewCard key={review._id} {...review} />)
          ) : (
            <h3>No reviews yet</h3>
          )}
        </div>
      </div>
    </div>
  );
}
