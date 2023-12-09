import { Link, useParams } from "react-router-dom";
import "./ReviewCard.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
export default function ReviewCard(props) {
  const { id } = useParams();
  const { userId } = useContext(AuthContext);
  return (
    <div className="review">
      <div className="rating">{"⭐".repeat(props.rating)}</div>
      <p className="text">{props.text}</p>
      <p className="user">{props.username}</p>
      {userId === props._ownerId && (
        <div className="review-buttons">
          <Link to={`/products/${id}/edit-review/${props._id}`}>
            <button className="edit-button">
              <i className="fas fa-pencil-alt"></i>Edit
            </button>
          </Link>
          <button
            className="delete-button"
            id={props._id}
            onClick={props.deleteHandler}
          >
            <i
              className="fas fa-trash-alt"
              id={props._id}
              onClick={props.deleteHandler}
            ></i>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
