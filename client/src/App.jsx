import {Routes , Route  } from "react-router-dom";
import Navbar from './consponents/Navbar'
import  Home  from "../src/pages/Home";
import Register from './pages/Register';
import Login from './pages/Login';
import Dashoard from "./pages/Dashboard";
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import {  UserContextProvider} from "../context/userContext";
import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {


  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashoard />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App
