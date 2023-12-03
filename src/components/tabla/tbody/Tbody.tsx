import React from 'react'
import { type ListaEmpleados } from '../../../types/types'
import { Link } from 'react-router-dom'
interface Props {
    empleados: ListaEmpleados
    handleDelete: (id: number | undefined ) =>void 
}

const Tbody: React.FC<Props> = ({ empleados, handleDelete }: Props) => {


    return (
        <tbody>
            {
                empleados?.map(empleado => (
                <tr key={empleado.idEmpleado}>    
                        <th scope="row">{empleado.idEmpleado}</th>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.departamento}</td>
                        <td>${empleado.sueldo}.00</td>
                        <td className='text-center'>
                            <div>
                                <Link to={`/editar/${empleado.idEmpleado}`} className='btn btn-warning me-3 btn-sm fw-bold'>Editar</Link>
                                <Link
                                    to={'/'} 
                                    onClick={() => handleDelete(empleado.idEmpleado)} 
                                    className='btn btn-danger me-1 btn-sm px-3 fw-bold'>X</Link>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default Tbody