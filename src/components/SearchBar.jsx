import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';
import "../styles/SearchBar.css"

export const SearchBar = ( [setResults] ) =>  {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(".../juegos.json")
            .then((Response) => Response.json())
            .then((json) => {
            const results = json.filter((juego) => {
            return juego && juego.titulo && juego.titulo.toLowerCase().includes(value);

                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Buscar juego..." value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )

};