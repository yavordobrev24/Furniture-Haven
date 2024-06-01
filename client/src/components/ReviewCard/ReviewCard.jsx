import { Link, useParams } from "react-router-dom";
import styles from "./ReviewCard.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
export default function ReviewCard(props) {
  const { id } = useParams();
  const { userId } = useContext(AuthContext);
  return (
    <div className={styles["review-card"]}>
      <p className={styles.user}>{props.username}</p>
      <p className={styles.text}>{props.text}</p>

      <div className={styles.rating}>{"⭐".repeat(props.rating)}</div>
      {userId === props._ownerId && (
        <div className={styles.btns}>
          <Link to={`/product/${id}/edit-review/${props._id}`}>
            <i className="fas fa-pencil-alt"></i> Edit
          </Link>
          <button id={props._id} onClick={props.deleteHandler}>
            <i
              className="fas fa-trash-alt"
              id={props._id}
              onClick={props.deleteHandler}
            ></i>{" "}
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
