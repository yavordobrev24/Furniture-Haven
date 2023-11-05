import "./Details.css";
export default function Details() {
  // Dummy furniture item for demonstration
  const furnitureItem = {
    id: 1,
    name: "Elegant Sofa",
    price: 599,
    description: "A comfortable and stylish sofa for your living room.",
    imageUrl: "sofa.jpg",
  };

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
          <img src={furnitureItem.imageUrl} alt={furnitureItem.name} />
        </div>
        <div className="furniture-details">
          <h1>{furnitureItem.name}</h1>
          <p className="price">${furnitureItem.price}</p>
          <p className="description">{furnitureItem.description}</p>
          <div className="furniture-buttons">
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="add-review-button" onClick={handleAddReview}>
              Add Review
            </button>
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
