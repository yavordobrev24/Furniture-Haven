import { Link } from "react-router-dom";
import "./ReviewCard.css";
export default function ReviewCard(props) {
  return (
    <div className="review">
      <div className="rating">Rating: {props.rating}</div>
      <p className="text">{props.text}</p>
      <p className="user">By: {props.username}</p>
      <div className="review-buttons">
        <button className="edit-button">
          <i className="fas fa-pencil-alt"></i>
          <Link to="/">Edit</Link>
        </button>
        <button className="delete-button">
          <i className="fas fa-trash-alt"></i> <Link to="/">Delete</Link>
        </button>
      </div>
    </div>
  );
}
