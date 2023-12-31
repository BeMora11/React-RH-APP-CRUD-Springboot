import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AgregarEmpleado() {
  let nav = useNavigate();

const [empleado, setEmpleado] = useState({
    nombre: '',
    departamento: '',
    sueldo: ''
  });

  const { nombre, departamento, sueldo } = empleado;

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const urlBase = "http://localhost:8080/rh-app/empleados";
    await axios.post(urlBase, empleado);
    nav('/');
  }

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h4>Agregar empleado</h4>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input value={nombre} onChange={(e) => onInputChange(e)} type="text" className="form-control" id="nombre" name='nombre' required={true} />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">Departamento</label>
          <input value={departamento} onChange={(e) => onInputChange(e)} type="text" className="form-control" id="departamento" name='departamento' />
        </div>
        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">Sueldo</label>
          <input value={sueldo} onChange={(e) => onInputChange(e)} type="number" className="form-control" id="sueldo" name='sueldo' />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
          <Link to='/' className='btn btn-danger btn-sm'>Regresar</Link>
        </div>
      </form>
    </div>
  )
}
