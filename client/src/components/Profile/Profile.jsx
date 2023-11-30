import { useContext } from "react";
import "./Profile.css";
import AuthContext from "../../contexts/authContext";

export default function Profile(props) {
  const { email, username } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="./images/pfp.webp"
          alt="profile picture"
          className="profile-picture"
        />
        <h2>{username}</h2>
      </div>
      <div className="profile-info">
        <h2>Contact information</h2>
        <h3>{email}</h3>
      </div>
    </div>
  );
}
