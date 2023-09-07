import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListadoEmpleados from "./empleados/ListadoEmpleados"
import Navegacion from "./shared/Navegacion"
import AgregarEmpleado from "./empleados/AgregarEmpleado"
import EditarEmpleado from "./empleados/EditarEmpleado"

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ListadoEmpleados />} />
          <Route path="/agregar" element={<AgregarEmpleado />} />
          <Route path="/editar/:id" element={<EditarEmpleado />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
