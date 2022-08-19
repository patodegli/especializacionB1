import { Routes, Route } from "react-router-dom";
import ContextoFormulario, { inputContext } from "./context/ContextoFormulario";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";


function App() {

  return (
    <div className="App">
      <ContextoFormulario>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </ContextoFormulario>
    </div>
  );
}

export default App;
