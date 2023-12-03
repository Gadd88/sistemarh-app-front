import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AgregarEmpleado from './components/plantilla/AgregarEmpleado';
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
          </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
