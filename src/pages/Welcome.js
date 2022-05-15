import React,{useEffect} from 'react'
import { Link,useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Welcome() {
    const navigate = useNavigate();
 
    useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')
  
      if (authToken) {
          navigate('/home')
      }
  
      if (!authToken) {
          navigate('/')
      }
  }, [])


    return (
        <Container  sx={{
            display:'flex',
            flexDirection:'column',
             bgcolor: '#d1edcf', 
             height: '100vh',
             borderRadius:10,
             justifyContent:'center',
             alignItems:'center'
             }}> 
 
 <Typography color='primary' variant="h4" gutterBottom component="div">
        Firebase React
      </Typography>

           <Button sx={{mb:2,mt:5}}size="large" href="/login" variant="contained"> Giriş </Button>
           <Button href="/register" variant="contained">Üye Ol</Button>

      
        </Container>
    )
}
