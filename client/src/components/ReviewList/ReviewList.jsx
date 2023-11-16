import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useParams } from "react-router-dom";
import "./ReviewList.css";
import { getProductReviews } from "../../services/reviewService";
import { deleteReview } from "../../services/reviewService";
export default function ReviewList(props) {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});
  const deleteHandler = async (e) => {
    await deleteReview(e.target.id);
    setReviews((oldState) => oldState.filter((x) => x._id !== e.target.id));
  };
  const fetchReviews = async (id) => {
    const data = await getProductReviews(id);
    setReviews(data);
  };
  useEffect(() => {
    fetchReviews(id);
  }, [id]);
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div className="review-list">
        {reviews?.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard
              key={review._id}
              deleteHandler={deleteHandler}
              {...review}
            />
          ))
        ) : (
          <h3>No reviews yet</h3>
        )}
      </div>
    </div>
  );
}
