import React from 'react'
import Banderas from "./components/Banderas"
import Datos from "./contexto/Datos"
import Cuerpo from "./components/Cuerpo"
import "./css/App.css"

function App() {
  return (
    <div>

      <Datos>
        <Banderas />

        <Cuerpo />
      </Datos>

    </div>
  )
}

export default App
