import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {
  const urlBase = "http://localhost:8080/rh-app/empleados";
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    setEmpleados(resultado.data);
  };

  const eliinarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  }

  return (
    <div className='container'>
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Sistema de recursos humanos</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.idEmpleado}</th>
              <td>{item.nombre}</td>
              <td>{item.departamento}</td>
              <td>
                <NumericFormat value={item.sueldo} displayType='text' thousandSeparator=',' prefix='$' decimalScale={2} fixedDecimalScale />
              </td>
              <td className='text-center'>
                <div>
                  <Link to={`/editar/${item.idEmpleado}`} className='btn btn-warning btn-sm me-3'>Editar</Link>
                  <button className='btn btn-sm btn-danger' onClick={() => eliinarEmpleado(item.idEmpleado)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
