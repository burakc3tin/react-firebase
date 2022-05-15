import React from 'react'
import {Link,useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Veri(props) {
     
  return (
   

<Card sx={{ minWidth: 275,mt:2 }}>
<CardContent>
 
   
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  {props.isim}
  </Typography>
  <Typography variant="body2">
  {props.sehir}
  
  </Typography>
</CardContent>
<CardActions style={{display:'flex',flexDirection:'column'}}>
<Link to="/veriduzenle"
       state={{id:props.id,isim:props.isim,sehir:props.sehir}}
       style={{color:'#538e53',fontWeight:'bold',textDecoration:'none'}}>✎Düzenle</Link>
       
      <Link to="/verisil"
       state={{id:props.id}}
       style={{color:'#d33384',fontWeight:'bold',textDecoration:'none'}}>X Sil</Link>
</CardActions>
</Card>
  )
}
