import './App.css'
import  { useState } from 'react'

//Importing the firebase modules
import appFirebase from './credentials'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase);

//Importing the components
import Login from '../src/components/Login';
import Home from '../src/components/Home';



function App() {
  
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (firebaseUser)=> {
    if (firebaseUser) {
      setUser(firebaseUser)
    }
    else{
      setUser(null)
    }
  })
  return (
    <div>
      
      {user ? <Home userEmail = {user.email} /> :  <Login/> }
    </div>
  )
}

export default App
