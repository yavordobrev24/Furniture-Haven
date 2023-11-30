import { useContext, useState } from "react";
import "./AddReviewPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { createReview } from "../../services/reviewService";
import AuthContext from "../../contexts/authContext";
export default function AddReviewPage(props) {
  const { userId, username } = useContext(AuthContext);
  const { id } = useParams();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      const data = {
        productId: id,
        reviewerId: userId,
        rating: rating,
        text: reviewText.trim(),
        username: username,
      };

      await createReview(data);

      navigate(`/products/${id}`);
    }
  };

  return (
    <div className="add-review-page">
      <h1>Add Your Review</h1>
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
