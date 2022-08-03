import React, { useContext, useState } from "react";
import { inputContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {

  const [datos, setDatos] = useState("")

  const {setValue} = useContext(inputContext)

  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.

  const onChange = (e) => {
    const info = e.target.value
    setDatos(info)
    // Aquí deberíamos actualizar el estado local del input.
  };

  const onBlur = (e) => {
    e.preventDefault();
    setValue(name, datos)

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
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

export default Input;
