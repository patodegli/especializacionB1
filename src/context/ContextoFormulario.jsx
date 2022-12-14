// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react";

/**
 * Estado inicial del formulario.
 * @type {{
 *    entrenador:{
 *      nombre: string,
 *      apellido: string,
 *      email: string
 *    },
 *    pokemon: {
 *      nombrePokemon: string,
 *      tipoPokemon: string,
 *      elemento: string,
 *      altura: string,
 *      edad: string
 *   }
 * }}}
 */

const initialState = {
    entrenador: {
        nombre: "",
        apellido: "",
        email: "",
    },
    pokemon: {
        nombrePokemon: "",
        tipoPokemon: "",
        elemento: "",
        altura: "",
        edad: ""
    }
}

const initialContext = {
    values: initialState, 
    setValue: () => false
}

/**
 * Función reductora para el estado del formulario que actualiza el estado en base a la acción.
 *
 * @param {initialState} state
 * @param {{
 *    type: string,
 *    payload: {
 *      clave: string,
 *      valor: string
 *    }
 * } action
 *
 * @returns {initialState}
 */

const reducer = (state, action) => {
    switch (action.type) {
        case "ACTUALIZAR_ENTRENADOR":
            return {
                ...state,
                entrenador: {
                    ...state.entrenador,
                    [action.payload.clave]: action.payload.valor
                }
            }
        case "ACTUALIZAR_POKEMON":
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    [action.payload.clave]: action.payload.valor
                }
            }
    
        default:
            return state;
    }
}

export const formContext = createContext(initialContext)

const ContextoFormulario = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
  
    const setValuePokemon = (nombreInput, valorInput) => {
        // al dispatch le paso un action con un type y un payload
        dispatch({type: "ACTUALIZAR_POKEMON", payload: {clave: nombreInput, valor: valorInput}})
    }
    const setValueEntrenador = (nombreInput, valorInput) => {
        dispatch({type: "ACTUALIZAR_ENTRENADOR", payload: {clave: nombreInput, valor: valorInput}})
    }

    return <formContext.Provider value={{values: state, setValuePokemon, setValueEntrenador}}>
        {children}
    </formContext.Provider>
}

export default ContextoFormulario