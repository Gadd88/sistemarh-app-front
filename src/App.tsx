import ListadoEmpleados from "./components/empleados/ListadoEmpleados"
import Navegacion from "./components/plantilla/Navegacion"

const App = (): JSX.Element => {

  return (
    <div 
      className='container text-center'>
        <Navegacion />
        <ListadoEmpleados />
    </div>
  )
}

export default App
