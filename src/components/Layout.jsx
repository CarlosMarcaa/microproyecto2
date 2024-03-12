import { Link, Outlet } from "react-router-dom";
import React from 'react'
import '../styles/Layout.css'

const Layout = () => {
  return (
    <div className="form-control">
      <div><h1>Secciones</h1></div>
      <nav>
        <ul>
            <li>
                <Link to='/clubs'>Clubs</Link>
            </li>
            <li>
                <Link to='/juegos'>Juegos</Link>
            </li>
            <li>
                <Link to='/busqueda'>Buscar</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
