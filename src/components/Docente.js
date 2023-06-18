import React, { useContext } from 'react';
import Contexto from "../contexto/Contexto.jsx";
import "../css/docente.css"
function Docente() {
    
    const { cursoAlumno } = useContext(Contexto);
    const idioma=cursoAlumno[3].idioma; 
    const urlimagen = `${process.env.PUBLIC_URL}/img/${cursoAlumno[idioma].foto}`;
    
    return (
        <div className='perfil'>
            <h3>{cursoAlumno[idioma].nombre}</h3>
            <div className='perfil__conteiner'>
                <img className='perfil__imagen' src={urlimagen} alt='imagenProfesor' />
            </div>
        </div>
    );
}

export default Docente;
