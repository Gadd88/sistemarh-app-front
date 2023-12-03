import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

const AgregarEmpleado = () => {
    const [nuevoEmpleado, setNuevoEmpleado] = useState({
        nombre:'',
        departamento:'',
        sueldo:''
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
        setNuevoEmpleado({
            ...nuevoEmpleado,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        const agregarEmpleado = (newEmp): void =>{
            try{
                fetch('http://localhost:8080/sistemarh-app/empleados', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newEmp),
                    })
            }catch(error){
                console.log(error)
            }finally{
                setNuevoEmpleado({
                    nombre:'',
                    departamento:'',
                    sueldo:''
                })
            }
        }
        agregarEmpleado(nuevoEmpleado)
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
                value={nuevoEmpleado.nombre}
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
                value={nuevoEmpleado.departamento}
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
                value={nuevoEmpleado.sueldo}
                className="form-control"
                name='sueldo'
                id="sueldo"/>
        </div>
        <div className='mb-3'>
            <button 
                type="submit" 
                className="btn btn-primary float-start">Agregar Empleado</button>
            <button 
                type="button" 
                className="btn btn-warning float-end">
                    <Link to='/' className='active'>Regresar</Link>
            </button>
        </div>
        
    </form>
  )
}

export default AgregarEmpleado