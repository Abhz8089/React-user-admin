import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate,Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle ,faUser, faLock, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "../pages/styles/login.css";

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:'',
    email:'',
    password:''
  })
 
   const registerUser = async (e) => {
    e.preventDefault();
    const {name,email,password} = data

    try {
      const {data} = await axios.post('/register' , {
        name,email,password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Login Successful. Welcome !')
        navigate('/login')
      }
    } catch (error) {
      console.log('line 30 =',error)
    }
   }

  return (
    // <div>
    //   <form onSubmit={registerUser}>
    //     <label htmlFor="">Name</label>
    //     <input
    //       type="text"
    //       placeholder="Enter your Name "
    //       onChange={(e) => {
    //         setData({ ...data, name: e.target.value });
    //       }}
    //       value={data.name}
    //     />
    //     <label htmlFor="">Email</label>
    //     <input
    //       type="email"
    //       placeholder="Enter your Email "
    //       onChange={(e) => {
    //         setData({ ...data, email: e.target.value });
    //       }}
    //       value={data.email}
    //     />
    //     <label htmlFor="">Password</label>
    //     <input
    //       type="password"
    //       placeholder="Enter password "
    //       onChange={(e) => {
    //         setData({ ...data, password: e.target.value });
    //       }}
    //       value={data.password}
    //     />
    //     <button type="submit">Sign up</button>
    //   </form>
    // </div>

    <div className="container">
  <div className="form-box">
    <div className="header-form">
      <h4 className="text-primary text-center">
        <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "110px" }} />
      </h4>
      <div className="image"></div>
    </div>
    <div className="body-form">
      <form onSubmit={registerUser}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            value={data.name}
          />
        </div>
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
          Sign Up
        </button>
        <div className="message">
          <div>
            <Link to="/login">Already Have an account</Link>
          </div>
        
        </div>
      </form>
      
    </div>
  </div>
</div>

  );
}

export default Register