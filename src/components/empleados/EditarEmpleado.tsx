import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { type Empleado } from '../../types/types'


const EditarEmpleado = () => {
    const { id } = useParams()

    const url = `http://localhost:8080/sistemarh-app/empleados/${id}`

    let navegacion = useNavigate()

    const [newEmpleado, setNewEmpleado] = useState<Empleado>({
        nombre:'',
        departamento:'',
        sueldo:0
    })
    const cargarEmpleado = async() => {
        try{
            const result = await fetch(url)
            const response = await result.json()
            setNewEmpleado(response)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
      cargarEmpleado()
    }, [])
    
    const editarEmpleado = () => {
        try{
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmpleado),
                })
        }catch(error){
            console.log(error)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        editarEmpleado()
        navegacion('/')
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewEmpleado({
            ...newEmpleado,
            [event.target.name] : event.target.value
        })
    }

  return (
    <form
        className='w-75 mx-auto mt-5 text-start' 
        onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-3">
            <label 
                htmlFor='nombre' 
                className="form-label">Nombre Completo</label>
            <input 
                type="text" 
                className="form-control"
                name='nombre'
                id="nombre"
                required={true}
                value={newEmpleado.nombre}
                onChange={handleChange} 
                aria-describedby="nombreHelp"/>
        </div>
        <div className="mb-3">
            <label 
                htmlFor='departamento'
                className="form-label">Departamento</label>
            <input 
                type="text"
                name='departamento'
                value={newEmpleado.departamento}
                onChange={handleChange} 
                className="form-control"
                required={true} 
                id="departamento"/>
        </div>
        <div className="mb-3">
            <label 
                htmlFor='sueldo'
                className="form-label">Sueldo Bruto</label>
            <input 
                type="number"
                required={true}
                onChange={handleChange}
                value={newEmpleado.sueldo}
                className="form-control"
                name='sueldo'
                id="sueldo"/>
        </div>
        <div className='mb-3 d-flex justify-content-between mt-5'>
            <button 
                type="submit" 
                className="btn btn-primary fw-bold">Editar Empleado</button>
            <button 
                type="button" 
                className="btn btn-warning text-decoration-none">
                    <Link to='/' className='text-decoration-none'>Regresar</Link>
            </button>
        </div>
    </form>
  )
}

export default EditarEmpleado