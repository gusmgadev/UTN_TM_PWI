/*MensajesListaWapp.jsx */
import React from 'react'
import MensajeWapp from '../MensajeWapp/MensajeWapp'
import './MensajesListaWapp.css'

const MensajesListaWapp = ({ listaDeMensajes }) => {
    //Recibe un arrays de objetos, cada objeto es un componente "mensaje" para whatsapp
    const prueba = [
        {
            autor: 'pepe',
            contenido: 'prueba',
            fecha: 'dia',
            estado: 'visto'
        }
    ]
    return (
        <div className='MensajesListaWapp'>
            <h3 className='Titulo'>Chat</h3>

            {listaDeMensajes.map((mensaje) => {
                return <MensajeWapp 
                    autor={mensaje.autor}
                    contenido={mensaje.contenido}
                    fecha={mensaje.fecha}
                    estado={mensaje.estado}
                />
            })}
        </div>

    )
}

export default MensajesListaWapp