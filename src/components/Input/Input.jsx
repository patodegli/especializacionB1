import React, { useContext, useState } from "react";
import { formContext } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types';

/**
 * Componente que maneja los inputs del formulario.
 * 
 * @param {{
 *    name: string, 
 *    label: string,
 *    type: string,
 *    isPokemon: boolean
 * }} props 
 * @returns void
 */

const Input = ({ name, label, type = "text", isPokemon }) => {

  const [datos, setDatos] = useState("")

  const { setValueEntrenador, setValuePokemon } = useContext(formContext)

/**
   * Función que se ejecuta al cambiar el valor del input.
   *
   * @param {Event} e
   */

  const onChange = (e) => {
    const info = e.target.value
    setDatos(info)
  };

   /**
   * Función que se ejecuta al perder el foco del input.
   *
   * @param {Event} e
   */

  const onBlur = (e) => {
    e.preventDefault();
    if (isPokemon) {
      setValuePokemon(name, datos)
    } else {
      setValueEntrenador(name, datos)
    }

  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={datos}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  isPokemon: PropTypes.bool
}

export default Input;
