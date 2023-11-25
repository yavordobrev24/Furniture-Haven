import { useContext, useEffect, useState } from "react";
import "./EditReviewPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { editReview, getSingleReview } from "../../services/reviewService";
import AuthContext from "../../contexts/authContext";

export default function EditReviewPage(props) {
  const { userId, username } = useContext(AuthContext);
  const { id, reviewId } = useParams();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();
  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };
  const getReview = async (reviewId) => {
    const result = await getSingleReview(reviewId);
    setRating(result.rating);
    setReviewText(result.text);
  };
  useEffect(() => {
    getReview(reviewId);
  }, []);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const data = {
      productId: id,
      reviewerId: userId,
      rating: rating,
      text: reviewText,
      username: username,
      _id: reviewId,
    };

    await editReview(reviewId, data);
    navigate(`/products/${id}`);
  };

  return (
    <div className="edit-review-page">
      <h1>Edit Your Review</h1>
      <form onSubmit={handleSubmitReview}>
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="reviewText">Review Text:</label>
        <textarea
          id="reviewText"
          value={reviewText}
          onChange={handleReviewTextChange}
          rows="4"
        />

        <button type="submit" className="submit-review-button">
          Submit Review
        </button>
      </form>
    </div>
  );
}
