import React from 'react'
import { Link } from 'react-router-dom'

const Navegacion = () => {
  return (
        <nav 
            data-bs-theme="dark" 
            className="navbar dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Sistema RH</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                    className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Listado Empleados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/agregar">Agregar Empleado</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navegacion