import React, { useContext } from "react";
import { inputContext } from "../../context/ContextoFormulario";

const Detalle = () => {
  const {values} = useContext(inputContext)

  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {values.nombre}</p>
          <p>Apellido: {values.apellido}</p>
          <p>Email: {values.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {values.nombrePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
