import React, { useState } from 'react';
import unimetImagen from '../assets/unimet-logo.jpg'

import appFirebase from '../credentials'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)
const Login = () => {

    const [registering, setRegistering] = useState(false)

    const functionAuth = async(e) =>{
        e.preventDefault();
        const mail = e.target.email.value;
        const password = e.target.password.value;

        if (registering) {
            try {
            await createUserWithEmailAndPassword(auth, mail, password)
                
            } catch (error) {
                alert("Asegurese que la contraseña tenga mas de 8 caracteres")
            }
        }else{
            try {
            await signInWithEmailAndPassword(auth,mail,password)
                
            } catch (error) {
                alert("El correo o la contraseña son incorrectos")
            }
        }
    }


  return (
    <div className='container'>
        <div className="row">
            {/* smaller column */}
            <div className="col-md-4">
                <div className="father">
                    <div className="card card-body shadow-lg">
                        <form onSubmit={functionAuth}>
                            <input type="text" className= "textbox" id='email' placeholder='Ingresar correo'/>
                            <input type="password" className= "textbox" id='password' placeholder='Ingresar contraseña'/>
                            <button className='form-button' >{registering ? "Registrar" : "Iniciar Sesion"}</button>
                        </form>
                        <h4 className='text'>{registering ? "Si ya tienes cuenta" : "No tienes cuenta?"}<button className= "button-switch" onClick={()=> setRegistering(!registering)}>{registering ? "Inicia Sesion" : "Registrate" }</button ></h4>
                    </div>
                </div>
            </div>
            {/* bigger column */}
            <div className="col-md-8">
                <img src={unimetImagen} alt="" className='image-size' />
            </div>
        </div>
    </div>
  )
}

export default Login