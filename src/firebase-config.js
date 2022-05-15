import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCg2iZYtz734vI9Bs8ZB-jAmOj566U8v7k",
  authDomain: "social-app-burak.firebaseapp.com",
  projectId: "social-app-burak",
  storageBucket: "social-app-burak.appspot.com",
  messagingSenderId: "149711172632",
  appId: "1:149711172632:web:8f79a7b984a3eca73d7f6d"
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}