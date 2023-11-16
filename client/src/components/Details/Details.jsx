import { useParams, Link } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../services/furnitureService";
import ReviewList from "../ReviewList/ReviewList";

export default function Details(props) {
  const { id } = useParams();
  const [furnitureData, setFurnitureData] = useState({});

  const fetchProduct = async (id) => {
    const data = await getSingleProduct(id);
    setFurnitureData(data);
  };
  useEffect(() => {
    fetchProduct(id);
  }, [id]);
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
            <Link to={`/products/${id}/add-review`}>
              <button className="add-review-button">Add Review</button>
            </Link>
          </div>
        </div>
      </div>
      <ReviewList />
    </div>
  );
}
