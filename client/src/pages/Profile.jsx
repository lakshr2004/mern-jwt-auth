import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await API.get("/profile");
      setUser(res.data);
    } catch (error) {
      console.log("Profile Error:", error.response?.data || error.message);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  fetchProfile();
}, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem("token");   // Remove token
    navigate("/login");                // Redirect
  };

  if (!user) return <h2>Loading...</h2>;

return (
  <div className="profile-wrapper">
    <div className="profile-card">

      <div className="profile-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>

      <h2>{user.name}</h2>

      <div className="profile-info">
        <strong>Email:</strong> {user.email}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

    </div>
  </div>
);


}

export default Profile;
