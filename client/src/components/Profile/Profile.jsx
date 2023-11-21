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
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
