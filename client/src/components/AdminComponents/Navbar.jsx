import React from 'react'
import './styles/Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {
  faUserCircle,
  faSignOutAlt,
  faSignInAlt,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Navbar() {
  const Navigate = useNavigate()

const handleLogout = () => {
  axios.post("admin/adminLogout").then(()=>{
    Navigate('/admin')
    toast.success('logout success')
  }).catch(err => console.log(err))
}

  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <FontAwesomeIcon icon={faCamera} /> c<b>A</b>meo
        </div>
        <div className="navbar__item">About Us</div>
        <div onClick={handleLogout} className="navbar__item">
          <FontAwesomeIcon icon={faSignOutAlt} />
          logout
        </div>

        <div className="navbar__item">
          <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "40px" }} />
          <br /> Admin
        </div>
      </header>
    </div>
  );
}

export default Navbar
