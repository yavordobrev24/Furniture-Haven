import { Link } from "react-router-dom";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <Link to="/products/kitchen" className="card">
        <img src="./images/kitchen.png" alt="Kitchen" />
        <div className="card-content">
          <h2>Kitchen</h2>
        </div>
      </Link>

      <Link to="/products/living-room" className="card">
        <img src="./images/livingRoom.avif" alt="Living Room" />
        <div className="card-content">
          <h2>Living Room</h2>
        </div>
      </Link>

      <Link to="/products/bedroom" className="card">
        <img src="./images/bedroom.jpg" alt="Bedroom" />
        <div className="card-content">
          <h2>Bedroom</h2>
        </div>
      </Link>
    </div>
  );
}
