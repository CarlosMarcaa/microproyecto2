import React from 'react'
import appFirebase from '../credentials'
import {getAuth,signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)
const Home = ({userEmail}) => {
  return (
    <div>
        <h2 className='text-center'>welcome user {userEmail}<button className='btn btn-primary' onClick={()=>signOut(auth)}>Logout</button></h2>
    </div>
  )
}

export default Home