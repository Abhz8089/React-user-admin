import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
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
      <div className="navbar__title navbar__item">Cameo</div>
      <div className="navbar__item">About Us</div>
      {user !== null ? (
        <div onClick={handleLogout} className="navbar__item">
          logout
        </div>
      ) : (
        <div onClick={() => Navigate("/login")} className="navbar__item ">
          SignIn
        </div>
      )}

      <div className="navbar__item">
        {user !== null ? (
          <FontAwesomeIcon onClick={()=>Navigate('/profile')} icon={faUserCircle} style={{ fontSize: "40px" }} />
        ) : (
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "40px" }} />
        )}
        <br /> {loading ? "loading" : user !== null ? user.name : "Guest"}
      </div>
    </header>
  );
};

export default Navbar;
