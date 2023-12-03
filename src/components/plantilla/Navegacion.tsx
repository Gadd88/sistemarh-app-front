import React from 'react'

const Navegacion = () => {
  return (
        <nav 
            data-bs-theme="dark" 
            className="navbar dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Sistema RH</a>
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
                            <a className="nav-link active" aria-current="page" href="/">Listado Empleados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/agregar">Agregar Empleado</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navegacion