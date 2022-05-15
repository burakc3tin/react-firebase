import React,{useState, useEffect} from 'react'
import {Link,useNavigate } from "react-router-dom";
 import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
 import {db} from '../firebase-config'
import Veri from './Veri';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function VerileriListele(props) {
    const [paylasimlar, setPaylasimlar] = useState([])

 
    useEffect(() => {
        const q = query(collection(db, 'paylasimlar'), orderBy('olusturulmaTarihi', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          setPaylasimlar(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',background:'brown'}} > 
        <Link style={{color:'white'}} to="/home">Ana Sayfaya Dön</Link>
 <h2>Verileri Listele</h2>
      
 
    {paylasimlar.map((paylasim) => (
          <Veri isim ={paylasim.data.isim}
            sehir={paylasim.data.sehir}
            id = {paylasim.id}
          />
        ))}

 
      

    </div>
  )
}
