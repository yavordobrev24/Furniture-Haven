import { Link } from "react-router-dom";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <Link to="/products/kitchen" className="card">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/ghk010123homeminifeature-005-6414864bc1ef0.png?crop=1.00xw:0.392xh;0,0.306xh&resize=1200:*"
          alt="Kitchen"
        />
        <div className="card-content">
          <h2>Kitchen</h2>
        </div>
      </Link>

      <Link to="/products/living-room" className="card">
        <img
          src="https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-d80334e03b4e4094d0e02846c7de2e85.jpg?f=xxxl"
          alt="Living Room"
        />
        <div className="card-content">
          <h2>Living Room</h2>
        </div>
      </Link>

      <Link to="/products/bedroom" className="card">
        <img
          src="https://www.marthastewart.com/thmb/dLEiwrGkOQpm6gzIQ6CO8ld2BOU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/small-bedroom-ideas-getty-0823-d982b46c35964a9cbd0c1d4f38bd665d.jpg"
          alt="Bedroom"
        />
        <div className="card-content">
          <h2>Bedroom</h2>
        </div>
      </Link>
    </div>
  );
}
