
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate ,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle ,faUser, faLock, faEnvelope} from "@fortawesome/free-solid-svg-icons";

import '../pages/styles/login.css'

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ fontSize: "110px" }}
            />
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form onSubmit={loginUser}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                value={data.password}
              />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">
              LOGIN
            </button>
            <div className="message">
              <div>
                <Link to="/register">Create Account</Link>
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
          </form>
          <div className="social">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
