import React,{useEffect, useState} from 'react'
import { Link,useNavigate,useLocation ,useParams} from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase-config'
 
export default function VeriDuzenle(props) {
  
 const location = useLocation();
 const [paylasimId,setPaylasimId] = useState(location.state.id);
       const [isim,setIsim] = useState(location.state.isim);
       const [sehir,setSehir] = useState(location.state.sehir);
       const navigate = useNavigate();

    const updateData = async (e) => {
        e.preventDefault()
        const taskDocRef = doc(db, 'paylasimlar', paylasimId)
        try{
          await updateDoc(taskDocRef, {
            isim: isim,
            sehir: sehir
          })
          navigate('/verilerilistele')
        } catch (err) {
          alert(err)
        }    
      }
 
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',background:'brown'}} > 
       
        <Link style={{color:'white'}} to="/home">Ana Sayfaya Dön</Link>

        <h2>Veri Düzenle</h2>
       <br/>
   
        <input type="text" placeholder={isim} onChange={(e)=>setIsim(e.target.value)} /><br />
        
        <input type="text" placeholder={sehir} onChange={(e)=>setSehir(e.target.value)} /><br /><br />
        <input type="button" value="Düzenle" onClick={updateData} />

    </div>
  )
}
