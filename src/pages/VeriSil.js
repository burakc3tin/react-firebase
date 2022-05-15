import React,{useState} from 'react'
import { Link,useNavigate,useLocation ,useParams} from "react-router-dom";
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase-config'

export default function VeriSil() {

  const location = useLocation();
  const navigate = useNavigate();

  const [paylasimId,setPaylasimId] = useState(location.state.id);

  const deleteData = async () => {
    const taskDocRef = doc(db, 'paylasimlar', paylasimId)
    try{
      await deleteDoc(taskDocRef)
      navigate('/verilerilistele')

    } catch (err) {
      alert(err)
    }
  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',background:'brown'}} > 
 <h2>Silmek istediğinizden emin misiniz?</h2>
        <Link style={{color:'white'}} to="/verilerilistele">Vazgeç</Link>
        <br/>
          <input type='button' value="X Sil" style={{padding:10,backgroundColor:'red',color:'white',fontWeight:'bold'}}
          onClick={deleteData}/>

    </div>
  )
}
