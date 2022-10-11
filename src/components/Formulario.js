import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ crearCita }) => {
  //Crer state de citas
  const [cita, actualizarCita] = useState({
    paciente: "",
    fecha: "",
    hora: "",
    sintomas: "",
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
  const { paciente , fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validacion
    if (
      paciente.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
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
      paciente: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Crear turno</h2>

     

      <form onSubmit={submitCita}>
        <label>Nombre del Paciente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre del paciente"
          onChange={handleChange}
          value={paciente}
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

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

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
