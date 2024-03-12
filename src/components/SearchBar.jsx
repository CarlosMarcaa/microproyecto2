import React, {useEffect, useState} from "react";
import "../styles/SearchBar.css"
import Buscador from './juegos.json'

const SearchBar = () => {
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")
  
    const showData = async () => {
      setUsers(Buscador)
    }   

    const searcher = (e) => {
        setSearch(e.target.value)   
    }
 
     const results = !search ? users : users.filter((dato)=> dato.titulo.toLowerCase().includes(search.toLocaleLowerCase()))
    
     useEffect( ()=> {
      showData()
    }, [])
    

    return (
      <div>
          <input value={search} onChange={searcher} type="text" placeholder='Buscar por nombre...' className='form-control'/>
          <table className='table table-striped table-hover mt-5 shadow-lg'>
              <thead>
                  <tr className='bg-curso text-white'>
                      <th>Nombre</th>
                  </tr>
              </thead>
              <tbody>
                  { results.map( (user) => (
                      <tr key={user.ID}>
                          <td>{user.titulo}</td>
                      </tr>                    
                  ))}
              </tbody>
          </table>
      </div>
    )
  }

export default SearchBar