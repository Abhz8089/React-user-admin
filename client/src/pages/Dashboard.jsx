import { useContext } from "react";
import {UserContext,  } from "../../context/userContext";

export default function Dashoard(){
    const {user,logoutUser} = useContext(UserContext)
     const handleLogout = () => {
       logoutUser();
     };
    return (
      <div>
        <h1>Dashboard</h1>
        {!!user && <h2>HI {user.name}</h2>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
}