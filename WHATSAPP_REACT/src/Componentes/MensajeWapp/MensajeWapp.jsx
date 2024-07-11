/*MensajeWapp.jsx */
import React from 'react'
import './MensajeWapp.css'
const MensajeWapp = ({ autor, contenido, fecha, estado }) => {

  const estilo = {
    position:"relative",
    left:"0px"
  } 

  estilo.left = (autor == 'yo') ? '100px' : '0px'

  return (
    <div style={estilo} className='MensajeWapp'>
      <div className='Autor'>{autor}</div>
      <span className='contenido'>{contenido}</span>
      <div className='pieMensaje'>
        <span className='fecha'>{fecha}</span>
        <span className='estado'>{estado}</span>
      </div>

    </div>
  )
}

export default MensajeWapp