import React from 'react'
import { type ListaEmpleados } from '../../../types/types'

interface Props {
    empleados: ListaEmpleados
}

const Tbody: React.FC<Props> = ({ empleados }) => {

  
    return (
        <tbody>
            {
                empleados?.map(empleado => (
                <tr key={empleado.idEmpleado}>    
                        <th scope="row">{empleado.idEmpleado}</th>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.departamento}</td>
                        <td>${empleado.sueldo}.00</td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default Tbody