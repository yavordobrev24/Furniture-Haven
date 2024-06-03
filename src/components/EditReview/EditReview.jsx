import { useContext, useEffect, useState } from "react";
import styles from "./EditReview.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { editReview, getSingleReview } from "../../services/reviewService";
import AuthContext from "../../contexts/authContext";

export default function EditReviewPage(props) {
  const { userId } = useContext(AuthContext);
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
    const data = await getSingleReview(reviewId);

    if (data.user_id != userId) {
      return navigate("/");
    }
    setRating(data.rating);
    setReviewText(data.text);
  };
  useEffect(() => {
    getReview(reviewId);
  }, []);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      const data = {
        rating: rating,
        text: reviewText.trim(),
      };

      await editReview(reviewId, data);
      navigate(`/product/${id}`);
    }
  };

  return (
    <div className={styles["edit-review"]}>
      <h1>Edit Your Review</h1>
      <form onSubmit={handleSubmitReview}>
        <label htmlFor="rating">Rating</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="reviewText">Review</label>
        <textarea
          id="reviewText"
          value={reviewText}
          onChange={handleReviewTextChange}
          rows="4"
        />
        <button type="submit" className={styles.leave}>
          Submit Review
        </button>
      </form>
    </div>
  );
}
