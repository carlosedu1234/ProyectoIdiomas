import React, { useState, useContext } from 'react'
import Contexto from "../contexto/Contexto"
import "../css/banderas.css"
import colombia from "../img/colombia.png"
import usd from "../img/usd.png"
import italia from "../img/italia.png"
function Banderas() {

    const { cursoAlumno } = useContext(Contexto);
    const { setCursoAlumno } = useContext(Contexto);

    const [imagenes] = useState([colombia, usd, italia]);

    const cambio = (valorIndice) => {
console.log(valorIndice);
        setCursoAlumno(
            cursoAlumno.map((dato, indice) => 
                indice === 3
                    ? {
                        ...dato, idioma: valorIndice
                    }
                    : { ...dato }
                    )
            );
    }

    return (


        <div className='container-banderas'>

            {imagenes.map((imagen, indice) => (

                <div className='item__bandera' onClick={() => cambio(indice)} key={indice}> <img className='banderas' src={imagen} alt="bamdera"/>
                </div>

            ))}

        </div>

    )
}

export default Banderas
