import React, { useContext } from "react";
import { formContext } from "../../context/ContextoFormulario";

/**
 * Componente que muestra el detalle del formulario, con
 * la información de cada uno de los campos que han sido completados por el usuario.
 *
 * @returns {JSX.Element}
 */

const Detalle = () => {
  const {values} = useContext(formContext)

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {values.entrenador.nombre}</p>
          <p>Apellido: {values.entrenador.apellido}</p>
          <p>Email: {values.entrenador.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {values.pokemon.nombrePokemon}</p>
          <p>Tipo de Pokemón: {values.pokemon.tipoPokemon}</p>
          <p>Elemento: {values.pokemon.elemento}</p>
          <p>Altura: {values.pokemon.altura}</p>
          <p>Edad: {values.pokemon.edad}</p>
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
