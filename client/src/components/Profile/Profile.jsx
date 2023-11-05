import "./Profile.css";

export default function Profile(props) {
  // Dummy user data for demonstration
  const user = {
    name: "John Doe",
    username: "johndoe123",
    email: "johndoe@example.com",
    profilePicture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          className="profile-picture"
        />
        <h1>{user.name}</h1>
        <p>@{user.username}</p>
      </div>
      <div className="profile-info">
        <h2>Contact Information</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
