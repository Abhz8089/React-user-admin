import axios from 'axios';
import {createContext,useState,useEffect} from 'react';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export const UserContext = createContext({});

export function UserContextProvider({children}){
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
   useEffect(() => {
     if(!user) {
        axios.get('/profile').then(({data})=>{
            setUser(data)
        })
     }
   
  
   }, [])

     const logoutUser = () => {
       axios
         .post("/logout")
         .then((data) => {
           setUser(null);
           
            navigate('/dashboard');
            toast.success(
              "logout success"
            )
         })
         .catch((error) => {
           console.log(error);
         });
     };
   
    return (
      <UserContext.Provider value={{user,setUser,logoutUser}}>
        {children}
      </UserContext.Provider>
    );
}

