import React from "react";
import Clubs from './clubs.json'

function Clubes() {
    return (
        <div className="Clubes">
            <br/><br/>

            {
                Clubs && Clubs.map( club => {
                    return(
                        <div className="form-control" key={club.ID}>
                            <strong>{club.nombre}</strong><br/>
                            {club.descripcion} <br/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Clubes