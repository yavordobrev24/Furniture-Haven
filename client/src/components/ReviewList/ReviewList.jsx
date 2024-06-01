import { useContext, useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

import "./ReviewList.css";
export default function ReviewList(props) {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div className="review-list">
        {props.reviews?.length > 0 ? (
          props.reviews.map((review) => (
            <ReviewCard
              key={review._id}
              deleteHandler={props.deleteHandler}
              {...review}
            />
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
