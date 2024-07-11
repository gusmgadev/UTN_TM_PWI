import React from 'react'
import MensajeWapp from './Componentes/MensajeWapp/MensajeWapp'
import { mensajes_Array } from './Datos/Datos'
import MensajesListaWapp from './Componentes/MensajesListaWapp/MensajesListaWapp'

function App() {
  return (
    <div>
      <MensajesListaWapp listaDeMensajes={mensajes_Array} />
    </div>
  )
}

export default App
