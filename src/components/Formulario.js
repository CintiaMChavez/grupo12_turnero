import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ crearCita }) => {
  //Crer state de citas
  const [cita, actualizarCita] = useState({
    code: "",
    box: "",
    fecha: "",
    hora: "",
  });

  //Crear state error
  const [error, setError] = useState(false);

  //Funcion quen se ejecuta cada vez que el usuario escribe
  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraccion de  valores
  const { code , box, fecha, hora, } = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validacion
    if (
      code.trim() === "" ||
      box.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === ""
    ) {
      setError(true);

      return;
    }

    //Asignar ID
    cita.id = uuid();

    //Crear Cita
    crearCita(cita);

    //Reiniciar el form

    actualizarCita({
      code: "",
      box:"",
      fecha: "",
      hora: "",
    });
  };

  return (
    <>
      
      <button type="submit" className="button-primary">
        crear turno</button>
       
     

      <form onSubmit={submitCita}>
        <label>Code</label>
        <input
          type="text"
          name="code"
          className="u-full-width"
          placeholder="codigo"
          onChange={handleChange}
          value={code}
        />

        <label>Box</label>
        <input
          type="number"
          name="box"
          className="u-full-width"
          placeholder="box"
          onChange={handleChange}
          value={box}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

 {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
           
       : null}
        <button type="submit" className="button-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
