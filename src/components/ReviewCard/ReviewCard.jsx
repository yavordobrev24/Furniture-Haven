import { Link, useParams } from "react-router-dom";
import styles from "./ReviewCard.module.css";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../contexts/authContext";
export default function ReviewCard(props) {
  const { id } = useParams();
  const { userId } = useContext(AuthContext);
  const stars = Array(props.rating).fill(<FontAwesomeIcon icon={faStar} />);

  return (
    <div className={styles["review-card"]}>
      <p className={styles.user}>{props.user_email}</p>
      <p className={styles.text}>{props.text}</p>

      <div className={styles.rating}>
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
      {userId === props.user_id && (
        <div className={styles.btns}>
          <Link to={`/product/${id}/edit-review/${props.id}`}>
            <i className="fas fa-pencil-alt"></i> Edit
          </Link>
          <button id={props.id} onClick={props.deleteHandler}>
            <i
              className="fas fa-trash-alt"
              id={props.id}
              onClick={props.deleteHandler}
            ></i>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
