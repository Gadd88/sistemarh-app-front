import React from 'react'
import useFetch from '../../hooks/useFetch'
import Tabla from '../tabla/Tabla'


export default function ListadoEmpleados() {
  
  const urlBase = 'http://localhost:8080/sistemarh-app/empleados'
    
  const {empleados} = useFetch(urlBase)
  
  const handleDelete = (id: number | undefined) => {
    try{ 
        fetch(`http://localhost:8080/sistemarh-app/empleados/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    }catch(error){
        console.log(error)
    }
    finally{
        document.location.reload()
    }
}    

  return (
    <div className='container'>
        <div
            className='container text-center'
            style={{
                margin:'30px'
            }}>
                <h1>Sistema de Recursos Humanos</h1>
                <Tabla
                  empleados={empleados} 
                  handleDelete={handleDelete}/>
        </div>
    </div>
  )
}