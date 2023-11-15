import { Link, useParams } from "react-router-dom";
import "./ReviewCard.css";
export default function ReviewCard(props) {
  const { id } = useParams();

  return (
    <div className="review">
      <div className="rating">Rating: {props.rating}</div>
      <p className="text">{props.text}</p>
      <p className="user">By: {props.username}</p>
      <div className="review-buttons">
        <button className="edit-button">
          <i className="fas fa-pencil-alt"></i>
          <Link to={`/products/${id}/edit-review/${props._id}`}>Edit</Link>
        </button>
        <button
          className="delete-button"
          id={props._id}
          onClick={props.deleteHandler}
        >
          <i className="fas fa-trash-alt"></i> Delete
        </button>
      </div>
    </div>
  );
}
