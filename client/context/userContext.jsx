import axios from 'axios';
import {createContext,useState,useEffect} from 'react';
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
         .then(() => {
           setUser(null);
        
            navigate('/dashboard');
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

