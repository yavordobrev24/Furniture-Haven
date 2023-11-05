import { useState } from "react";
import "./AddReviewPage.css";
export default function AddReviewPage(props) {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    console.log("Rating:", rating);
    console.log("Review Text:", reviewText);
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
