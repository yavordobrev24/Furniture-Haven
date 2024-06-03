import { useContext, useEffect, useState } from "react";
import styles from "./AddReview.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { createReview, getReviews } from "../../services/reviewService";
import AuthContext from "../../contexts/authContext";
export default function AddReviewPage(props) {
  const { userId, email } = useContext(AuthContext);
  const { id } = useParams();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();
  const checkCorrectUser = async () => {
    const productReviews = await getReviews(id);
    if (productReviews.find((x) => x.user_id === userId)) {
      return navigate("/");
    }
  };
  useEffect(() => {
    checkCorrectUser();
  });
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
        product_id: id,
        user_id: userId,
        rating: rating,
        text: reviewText.trim(),
        user_email: email,
      };

      await createReview(data);

      navigate(`/product/${id}`);
    }
  };

  return (
    <div className={styles["add-review"]}>
      <h1>Add Your Review</h1>
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

        <button type="submit" className={styles["leave"]}>
          Leave Review
        </button>
      </form>
    </div>
  );
}
