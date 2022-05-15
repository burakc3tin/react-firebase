import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import {db} from '../firebase-config'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {

  const [isim,setIsim] = useState('');
  const [sehir,setSehir] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/home')
    }

    if (!authToken) {
        navigate('/login')
    }
}, [])

const logoutUser = () => {
  sessionStorage.removeItem('Auth Token');
        navigate('/')

}

 

  
  return (     
    <div  > 
  
      <AppBar style={{background:'brown'}} position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button onClick={logoutUser} style={{color:'white'}}>Çıkış Yap</Button>
        </Toolbar>
      </AppBar>
    <div style={{height:'80vh',display:'flex',flexDirection:'column',justifyContent:'center'
  ,alignItems:'center'
  }}>
     <Link style={{
      background:'brown',
      padding:7,
      borderRadius:5,
      color:'white',textDecoration:'none',
     fontWeight:'bold',
     fontSize:25,
     letterSpacing:2}} to="/veriekle">Veri Ekle</Link>
 
    <br/>
 
 
    <br/>
    <Link style={{
      background:'brown',
      padding:7,
      borderRadius:5,
      color:'white',textDecoration:'none',
     fontWeight:'bold',
     fontSize:25,
     letterSpacing:2}} to="/verilerilistele">Verileri Listele</Link>
    <br/>

    </div>
  
 
    </div>

  )
}
