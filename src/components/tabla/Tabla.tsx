import React from 'react'
import useFetch from '../../hooks/useFetch'
import Tbody from './tbody/Tbody'
import Thead from './thead/Thead'

const Tabla = () => {
    const urlBase = 'http://localhost:8080/sistemarh-app/empleados'
    
    const {empleados} = useFetch(urlBase)
    
    const keys = empleados.length > 0 ? Object.keys(empleados[0]) : []
    return (
        <table className="table table-striped table-hover align-middle">
            <Thead 
                keys={keys}/>
            <Tbody
                empleados={empleados} />
        </table>
    )
}

export default Tabla