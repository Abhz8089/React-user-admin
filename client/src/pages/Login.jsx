// import {useState} from 'react'
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate()
//   const [data, setData] = useState({
//     email:'',
//     password:''
//   })

//   const loginUser = async(e) => {
//     e.preventDefault()
//     const {email,password} = data
//     try {
//       const {data} = await axios.post('/login',{
//         email,
//         password
//       });
//       if(data.error) {
//         toast.error(data.error)
//       }else{
       
//         setData({})
//         navigate('/dashboard')
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={loginUser}>
//         <input
//           type="email"
//           placeholder="Enter your Email "
//           onChange={(e) => {
//             setData({ ...data, email: e.target.value });
//           }}
//            value={data.email}
//         />
//         <label htmlFor="">Password</label>
//         <input
//           type="password"
//           placeholder="Enter password "
//           onChange={(e) => {
//             setData({ ...data, password: e.target.value });
//           }}
//           value={data.password}
//         />
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default Login




import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form onSubmit={loginUser}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
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
                  <i className="fa fa-lock"></i>
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
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
          </form>
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
