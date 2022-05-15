import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function Login() {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }

    if (!authToken) {
      navigate('/login')
    }
  }, [])

  const loginUser = () => {
    const authentication = getAuth();

    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      }).catch(() => {
    
        toast("❌ Hatalı email veya parola !");
      })


  }


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',background:'brown'}} > 


<Typography color='white' variant="h4" gutterBottom component="div">
       Login
      </Typography>


  
    
      <Input sx={{mt:2}} onChange={(e) => setEmail(e.target.value)} style={{color:'white'}} placeholder="email"   />
      <Input sx={{mt:2,mb:2}} onChange={(e) => setPassword(e.target.value)} style={{color:'white'}} type="password" placeholder="parola"   />
      <Button color="error" sx={{mt:2,mb:2}} onClick={loginUser}  variant="contained">Giriş</Button>

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

      <Link style={{color:"wheat"}}to="/register">Üye değil misin?</Link>
      <br />
      <Link style={{color:"wheat"}} to="/">Giriş sayfasına git</Link>

    </div>

  )
}
