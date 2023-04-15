import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Profile = (props) => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Hello {name} </h1>
      <p> Loaction: {location.pathname}</p>
      {/* {location.pathname === `/profile/pravin` ? <button>Logout</button> : null} */}
      {location.pathname === `/profile/pravin` ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}

      <button onClick={handleclick}>Go Back</button>
    </div>
  );
};

export default Profile;
