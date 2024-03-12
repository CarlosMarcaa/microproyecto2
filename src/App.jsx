import './App.css'
import  { useState } from 'react'

//Importing the firebase modules
import appFirebase from './credentials'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase);

//Importing the components
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import SearchBar from '../src/components/SearchBar'
import Clubes from '../src/components/Clubes'
import VideoJuegos from '../src/components/VideoJuegos'
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout'




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
      <div className='search-bar-container'>
        <h1>Secciones</h1>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='busqueda' element={<SearchBar/>}/>
            <Route path='clubs' element={<Clubes/>}/>
            <Route path='juegos' element={<VideoJuegos/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  
  )
}

export default App
