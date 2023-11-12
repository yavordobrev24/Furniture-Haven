import { useParams, Link } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";

export default function Details(props) {
  const { id } = useParams();
  const [furnitureData, setFurnitureData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/furniture/${id}`)
      .then((res) => res.json())
      .then((data) => setFurnitureData(data));
  }, [id]);

  // Dummy reviews for the furniture item
  const reviews = [
    {
      id: 1,
      rating: 4,
      text: "Great sofa, very comfortable!",
      user: "John Doe",
    },
    {
      id: 2,
      rating: 5,
      text: "Excellent quality and design.",
      user: "Jane Smith",
    },
  ];

  const handleAddReview = () => {
    // Implement the logic to open a review form or a modal for adding a new review
    // You can use state or a library like React-Modal for this purpose
  };

  return (
    <div className="furniture-details-page">
      <div className="details-info">
        <div className="furniture-image">
          <img src={furnitureData.imageUrl} alt={furnitureData.name} />
        </div>
        <div className="furniture-details">
          <h1>{furnitureData.name}</h1>
          <p className="price">${furnitureData.price}</p>
          <p className="description">{furnitureData.description}</p>
          <div className="furniture-buttons">
            <button className="buy-button">
              <i className="fas fa-shopping-bag"></i> Buy
            </button>
            <Link to={`/details/${id}/add-review`}>
              <button className="add-review-button" onClick={handleAddReview}>
                Add Review
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <div className="review-list">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <div className="rating">Rating: {review.rating}</div>
              <p className="text">{review.text}</p>
              <p className="user">By: {review.user}</p>
              <div className="review-buttons">
                <button className="edit-button">
                  <i className="fas fa-pencil-alt"></i> Edit
                </button>
                <button className="delete-button">
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
