import React,{useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route,useNavigate} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
import VeriEkle from './pages/VeriEkle';
import VeriDuzenle from './pages/VeriDuzenle';
import VerileriListele from './pages/VerileriListele';
import VeriSil from './pages/VeriSil';

import { app } from "./firebase-config";

export default function App() {
  
  return (
    
    

<Routes>
<Route path="/"  element={<Welcome/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>

        <Route path="veriekle" element={<VeriEkle/>}/>
        <Route path="veriduzenle" element={<VeriDuzenle/>}/>
        <Route path="verisil" element={<VeriSil/>}/>
        <Route path="verilerilistele" element={<VerileriListele/>}/>


        <Route path="*" element={<Error/>}/>
</Routes>

        

    
  )
}
