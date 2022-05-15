import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom";
import { app } from "../firebase-config";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function Register() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
 
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/home')
    }

    if (!authToken) {
        navigate('/register')
    }
}, [])

  const registerUser = () => {
     
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      navigate('/home')
  }).catch(() => {
 
    toast("❌Geçerli bir email veya parola girin !");
  })

  }


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',background:'brown'}} > 
    
  
<Typography color='white' variant="h4" gutterBottom component="div">
       Register
      </Typography>
 
      <Input sx={{mt:2,mb:2}}  onChange={(e)=>setEmail(e.target.value)}  style={{color:'white'}} placeholder="email"   />
      <Input sx={{mt:2,mb:2}} onChange={(e)=>setPassword(e.target.value)} type="password" style={{color:'white'}} placeholder="parola"   />

      <Button color="error" sx={{mt:2,mb:2}} onClick={registerUser} variant="contained">Giriş</Button>

     
         <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <br/>
    <Link style={{color:"wheat"}} to="/login">Zaten üye misin?</Link>
    <br/>
    <Link style={{color:"wheat"}} to="/">Ana sayfaya git</Link>

    </div>

    

    
  )
}
