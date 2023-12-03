import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AgregarEmpleado from './components/empleados/AgregarEmpleado';
import EditarEmpleado from './components/empleados/EditarEmpleado';
import HomeView from "./components/plantilla/Homeview"
import Navegacion from "./components/plantilla/Navegacion"

const App = (): JSX.Element => {

  return (
    <div 
      className='container text-center'>
        <BrowserRouter>
          <Navegacion />
          <Routes>
            <Route path='/' element={<HomeView/>} />
            <Route path='/agregar' element={<AgregarEmpleado/>} />
            <Route path='/editar/:id' element={<EditarEmpleado/>} />
          </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
