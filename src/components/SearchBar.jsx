import React, {useEffect, useState} from "react";
import "../styles/SearchBar.css"
import Buscador from './todo.json'

const SearchBar = () => {
    const [ users, setUsers] = useState([])
    const [ search, setSearch ] = useState("")
    const showData = async () => {
       setUsers(Buscador)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if(!search)
    {
        results = users
    }else{
        results = users.filter( (dato) =>
        dato.titulo.toLowerCase().includes(search.toLowerCase())
        )
    }

    useEffect ( ()=> {
       showData()
    })
    return(
       <div>
            <input value={search} onChange={searcher} type="text" placeholder="Buscar por nombre..." className="barra"/>
           <table className="tabla">
               <thead>
                   <tr className="bg">
                       <th>Nombre</th>
                   </tr>
               </thead>
               <tbody>
                   {results.map((user) => (
                    <tr key={user.id}>
                        <td>{user.titulo}</td>
                    </tr>
                   ))}
               </tbody>
           </table>
       </div>
    )
}

export default SearchBar