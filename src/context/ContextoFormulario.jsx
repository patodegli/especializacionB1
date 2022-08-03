// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext } from "react";

const initialValue = {
    values: {}, 
    setValue: () => false
}

export const inputContext = createContext(initialValue)