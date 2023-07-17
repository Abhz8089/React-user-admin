import React, { useState } from "react";
import './styles/Login.css'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate,Link } from "react-router-dom";


const LoginForm = () => {
  const Navigate = useNavigate()
const [data, setData] = useState({
  email:'',
  password:'',
})

  const loginAdmin =async (e) => {
    e.preventDefault();
    const {email,password} = data;
    try {
      const {data} = await axios.post('/admin/adminLogin',{
        email,
        password
      })
      if(data.error) {
        toast.error(data.error)
      }else{
        setData({});
        Navigate('/adminHome')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="wrapper">
      <div className="container-admin">
        <div className="col-left">
          <div className="login-text">
            <h2>ADMIN</h2>
         
            <button className="btn" onClick={()=>{Navigate("/login")}} >User Login</button>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={loginAdmin}>
              <p>
                <label>
                  Username or email address<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  required
                  value={data.email}
                  onChange={(e) => setData({...data,email:e.target.value})}
                />
              </p>
              <p>
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={data.password}
                  onChange={(e) => setData({...data,password:e.target.value})}
                />
              </p>
              <p>
                <input type="submit" value="Sign In" />
              </p>
              <p>
                <a href="#">Forget Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default LoginForm;
