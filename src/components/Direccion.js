import React,{useContext} from 'react'
import Contexto from "../contexto/Contexto"
function Direccion() {

  const {cursoAlumno} =useContext(Contexto);
  const idioma=cursoAlumno[3].idioma; 
  const datos=cursoAlumno[idioma].direccion;
  return (
    <div>
      <h3>Direccion</h3>
      <h3>{datos}</h3>
    </div>
  )
}

export default Direccion
