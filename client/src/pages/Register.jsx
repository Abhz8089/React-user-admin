import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


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
    <div>
      <form onSubmit={registerUser}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your Name "
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
          value={data.name}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your Email "
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          value={data.email}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter password "
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          value={data.password}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Register