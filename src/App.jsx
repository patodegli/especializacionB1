import { Routes, Route } from "react-router-dom";
import { inputContext } from "./context/ContextoFormulario";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { useState } from "react";

function App() {

  const [valueState, setValueState] = useState({} )
const setValue = (clave, valor) => {
  valueState[clave] = valor
  setValueState({...valueState})
}

  return (
    <div className="App">
      <inputContext.Provider value={{values: valueState, setValue}}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </inputContext.Provider>
    </div>
  );
}

export default App;
