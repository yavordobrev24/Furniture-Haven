import ReviewCard from "../ReviewCard/ReviewCard";

import styles from "./Reviews.module.css";
export default function Reviews(props) {
  return (
    <div className={styles["reviews"]}>
      <h3>Reviews</h3>
      <div className={styles.list}>
        {props.reviews?.length > 0 ? (
          props.reviews.map((review) => (
            <ReviewCard
              key={review._id}
              deleteHandler={props.deleteHandler}
              {...review}
            />
          ))
        ) : (
          <p className={styles.no}>There are no any reviews.</p>
        )}
      </div>
    </div>
  );
}
