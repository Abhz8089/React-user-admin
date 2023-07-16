import Navbar from "../components/Navbar";
import Card from "../components/Card";

import "./styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="main">
      <Navbar />
      <Card />
    </div>
  );
}













// import { useContext } from "react";
// import {UserContext,  } from "../../context/userContext";

// export default function Dashoard(){
//     const {user,logoutUser} = useContext(UserContext)
//      const handleLogout = () => {
//        logoutUser();
//      };
//     return (
//       <div>
//         <h1>Dashboard</h1>
//         {user && <h2>HI {user.name}</h2>}
//         {!user && <h2>Hello Guest </h2>}
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
// }

// import { Fragment, useContext, useEffect, useState } from "react";
// import { UserContext } from "../../context/userContext";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Card from "../components/Card";
// import axios from 'axios';
// import './styles/Dashboard.css'

// export default function Dashboard() {
//     const Navigate =useNavigate()
//   const { user,setUser, logoutUser } = useContext(UserContext);
//   const [loading, setLoading] = useState(true); // New loading state

//   const handleLogout = () => {
//     logoutUser();
//   };

//   useEffect(() => {
//     if (!user) {
//       // Only make the API request if user is not already set
//       axios
//         .get("/profile")
//         .then(({ data }) => {
//           setUser(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.log(error);
//           setLoading(false);
//         });
//     }
//   }, [user, setUser]);

//   return (
//   <div className="main">
//     <Navbar/>
//      <Card/>
//     {/* <div>
//       <h1>Dashboard</h1>
//       {loading ? (
//         <h2>Loading...</h2>
//       ) : (
//         <>
//           {user !== null ? ( // Check if user is not null
//             <>
//               <p>Hi {user.name}<p>
//               <button onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <p>Guest</p>
//               <button onClick={()=>Navigate('/login')}>Login</button>
//             </>
//           )}
//         </>
//       )}

//     </div> */}

// </div>

//   );
// }
