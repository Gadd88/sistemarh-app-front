import React from 'react'
import { type ListaEmpleados } from '../../types/types'
import Tbody from './tbody/Tbody'
import Thead from './thead/Thead'

interface Props {
    handleDelete: ()=> void
    empleados: ListaEmpleados
}

const Tabla: React.FC<Props> = ({handleDelete, empleados}: Props) => {
    
    
    const keys = empleados.length > 0 ? Object.keys(empleados[0]) : []

    return (
        <table className="table table-striped table-hover align-middle">
            <Thead 
                keys={keys}/>
            <Tbody
                empleados={empleados}
                handleDelete={handleDelete} />
        </table>
    )
}

export default Tabla