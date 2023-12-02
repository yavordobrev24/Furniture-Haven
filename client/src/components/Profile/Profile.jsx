import { useContext } from "react";
import "./Profile.css";
import AuthContext from "../../contexts/authContext";

export default function Profile(props) {
  const { email, username } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="./images/pfp.jpg"
          alt="profile picture"
          className="profile-picture"
        />
        <h2>{username}</h2>
      </div>
      <div className="profile-info">
        <p>
          <b>Email:</b> {email}
        </p>
      </div>
    </div>
  );
}
