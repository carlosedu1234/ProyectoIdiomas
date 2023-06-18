import React, { useContext, useState } from 'react'
import Contexto from "../contexto/Contexto"
import Docente from "./Docente"
import Direccion from "./Direccion"
import "../css/cuerpo.css"
function Cuerpo() {

  const { cursoAlumno} = useContext(Contexto);


  const [activo1, setActivo1] = useState(false);
  const [activo2, setActivo2] = useState(false);

  const idioma=cursoAlumno[3].idioma; 
  const cambioProfesor = () => {
    if (activo2) {
      setActivo2(!activo2);
      setActivo1(!activo1);
    }
    else { setActivo1(!activo1); }

  }

  const cambioDireccion = () => {
    if (activo1) {
      setActivo1(!activo1);
      setActivo2(!activo2);

    }
    setActivo2(!activo2);

  }


  return (
    <>
      <div className='cuerpo'>
        <h1>{cursoAlumno[idioma].titulo}</h1>
        <h2>{cursoAlumno[idioma].texto}</h2>
        <div className='cuerpo__botones'>
          <button onClick={cambioProfesor} className='cuerpo__boton'>{cursoAlumno[idioma].btnDocente1}</button>
          <button onClick={cambioDireccion} className='cuerpo__boton'>{cursoAlumno[idioma].btnDireccion2}</button>
        </div>
        {activo1
          ? <Docente />
          : null
        }
        {activo2
          ? <Direccion />
          : null
        }

      </div>

    </>
  )
}

export default Cuerpo
