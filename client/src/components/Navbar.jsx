import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserCircle,
  faSignOutAlt,
  faSignInAlt,
  faCamera
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./StyleSheet/Navbar.css";

const Navbar = () => {
  const Navigate = useNavigate();
  const { user, setUser, logoutUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true); // New loading state

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    if (!user) {
      // Only make the API request if user is not already set
      axios
        .get("/profile")
        .then(({ data }) => {
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [user, setUser]);
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <FontAwesomeIcon icon={faCamera} /> c<b>A</b>meo
      </div>
      <div className="navbar__item">About Us</div>
      {user !== null ? (
        <div onClick={handleLogout} className="navbar__item">
          <FontAwesomeIcon icon={faSignOutAlt} />
          logout
        </div>
      ) : (
        <div onClick={() => Navigate("/login")} className="navbar__item ">
          <FontAwesomeIcon icon={faSignInAlt} />
          SignIn
        </div>
      )}

      <div className="navbar__item">
        {user !== null ? (
          <>
            {user.image ? (
              <img
                onClick={() => Navigate("/profile")}
                className="navProfile"
                src={`http://localhost:8000/${user.image}`}
                alt=""
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => Navigate("/profile")}
                icon={faUserCircle}
                style={{ fontSize: "40px" }}
              />
            )}
          </>
        ) : (
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "40px" }} />
        )}
        <br /> {loading ? "loading" : user !== null ? user.name : "Guest"}
      </div>
    </header>
  );
};

export default Navbar;
