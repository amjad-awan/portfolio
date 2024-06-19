// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUgnoVLluDEy_DOttHG7R5IEln7RYxyc4",
    authDomain: "personal-portfolio-8fd52.firebaseapp.com",
    projectId: "personal-portfolio-8fd52",
    storageBucket: "personal-portfolio-8fd52.appspot.com",
    messagingSenderId: "518709702344",
    appId: "1:518709702344:web:34e0d0492fdfa63c7bfffd",
    measurementId: "G-FVEN8L7NMH"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };