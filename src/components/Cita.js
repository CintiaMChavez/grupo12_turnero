import React from "react";
import PropTypes from "prop-types";



const Cita = ({ cita, eliminarCita }) => (
  
  <div className="cita">
    <p>
      Code: <span>{cita.code}</span>
    </p>
    <p>
      Box: <span>{cita.box}</span>
    </p>
    <p>
      Hora: <span>{cita.hora}</span>
    </p>
    <p>
      Fecha: <span>{cita.fecha}</span>
    </p>

    <button
      className="button eliminar"
      onClick={() => eliminarCita(cita.id)}
    >
      {" "}
    &times;
    </button>
    </div>
 
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
