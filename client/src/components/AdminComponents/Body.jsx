


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/reducers/userReducers";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


function Body() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [searchTerm, setSearchTerm] = useState("");
  const Navigate = useNavigate()

  useEffect(() => {
    
    axios
      .get("admin/adminHome")
      .then((res) => {
        // Assuming res.data is an array of user objects
        console.log('before data',res.data)
        if(res.data){
          console.log('inside data')
        dispatch(setUsers(res.data));
        }else{
          console.log('else')
          Navigate('/admin')
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const emailMatch = user.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || emailMatch;
  });
  
  const handleDeleteUser = (userId) => {
     const confirmed = window.confirm(
       "Are you sure you want to delete this user?"
     );
     if(confirmed){
    axios.delete(`admin/deleteUser/${userId}`)
    .then((res) =>{
      dispatch(setUsers(res.data))
    })
    .catch((err) => console.log(err))
  }

  }





  return (
    <div>
      <h1>User Table</h1>
      <div>
        <input
          type="text"
          placeholder="Search by Name or Email"
          onChange={handleSearch}
        />
      </div>
      <table style={{ border: "1px solid black", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Email</th>
            <th style={{ border: "1px solid black" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td style={{ border: "1px solid black" }}>{user.name}</td>
              <td style={{ border: "1px solid black" }}>{user.email}</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Body;

