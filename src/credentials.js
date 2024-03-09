// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7X7OopSx1PcVEm8xFPtsCG2M-efOujaE",
  authDomain: "microproyecto2-3567f.firebaseapp.com",
  projectId: "microproyecto2-3567f",
  storageBucket: "microproyecto2-3567f.appspot.com",
  messagingSenderId: "286575915371",
  appId: "1:286575915371:web:3513e50a76142f77fb1c2e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;