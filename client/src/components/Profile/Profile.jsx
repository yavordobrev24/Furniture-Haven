import { useContext } from "react";
import "./Profile.css";
import AuthContext from "../../contexts/authContext";

export default function Profile(props) {
  // Dummy user data for demonstration
  const { email, username } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="./images/pfp.webp"
          alt="profile picture"
          className="profile-picture"
        />
        <h1>{username}</h1>
      </div>
      <div className="profile-info">
        <h2>Contact Information</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}
