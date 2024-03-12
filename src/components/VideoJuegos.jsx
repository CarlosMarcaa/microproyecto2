import React from "react";
import Juegos from './juegos.json'

function VideoJuegos() {
    return (
        <div className="VideoJuegos">
            <br/><br/>

            {
                Juegos && Juegos.map( juego => {
                    return(
                        <div className="form-control" key={juego.ID}>
                            <strong>{juego.titulo}</strong><br/>
                            { juego.genero } <br/>
                            {juego.descripcion}<br/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VideoJuegos