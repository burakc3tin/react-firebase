import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import {db} from '../firebase-config'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';


export default function VeriEkle() {
    
  const [isim,setIsim] = useState('');
  const [sehir,setSehir] = useState('');

  const addDataFirebase = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'paylasimlar'), {

        isim: isim,
        sehir: sehir,
        olusturulmaTarihi: Timestamp.now()
      })
      alert("Veri ekleme başarılı..!")
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',background:'brown'}} > 
          <Link style={{color:'white'}} to="/home">Geri Dön</Link>
       
       <h2>Veri Ekle</h2>
      
       <Input sx={{mt:2}} onChange={(e)=>setIsim(e.target.value)} style={{color:'white'}} placeholder="İsim gir"   />
       <Input sx={{mt:2}} onChange={(e)=>setSehir(e.target.value)} style={{color:'white'}} placeholder="Şehir gir"   />

 
       <Button color="primary" sx={{mt:4,mb:2}} onClick={addDataFirebase} variant="contained">Kaydet</Button>

   
    </div>
  )
}
