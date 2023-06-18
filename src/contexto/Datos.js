import React, { useState } from "react";
import Contexto from "./Contexto"
const valores = [

    {
        titulo: "Aprende Riact intensivamente con una profesora nativa",
        texto: "2 semanas. Una profesora solo para ti (12/d)",
        btnDocente1: "Prefesora",
        foto: "marta.jpg",
        nombre: "Marta Rios",
        btnDireccion2: "Direccion",
        direccion: "48 5t Bogota"
    },
    {
        titulo: "Learn React intensively with a native teacher",
        texto: "2 weeks. A teacher just for you (12/d)",
        btnDocente1: "Teacher",
        foto: "maria.jpg",
        nombre: "Marta Rios",
        btnDireccion2: "Address",
        direccion: "48 5th Laurent Boulevard, Montreal"
    }
    , {
        titulo: "Impara React in modo intensivo con un'insegnante madrelingua",
        texto: "2 settimane. Un'insegnante solo per te (12/d)",
        btnDocente1: "Insegnante",
        foto: "mariana.jpg",
        nombre: "Marta Rios",
        btnDireccion2: "Indirizzo",
        direccion: "48 5th Laurent Boulevard, Montreal"
    },

    {
        idioma: 0
    }


];

const Datos = function ({ children }) {





    const [cursoAlumno, setCursoAlumno] = useState(valores);

    return (


        <Contexto.Provider
            value={{ cursoAlumno, setCursoAlumno }}
        >

            {children}
        </Contexto.Provider>
    );
};
export default Datos;