import React from 'react'
import Tabla from '../tabla/Tabla'


export default function ListadoEmpleados() {
    

  return (
    <div className='container'>
        <div
            className='container text-center'
            style={{
                margin:'30px'
            }}>
                <h1>Sistema de Recursos Humanos</h1>
                <Tabla />
        </div>
    </div>
  )
}