import {createContext, Dispatch, PropsWithChildren, useReducer} from "react";
import {ActionsType, DarkModeReducer} from "./darkModeReducer";

const InitialState = {
    darkMode: false
}

export type InitialStateType = typeof InitialState;
export type DarkModeContextType = InitialStateType | {dispatch: Dispatch<ActionsType>}

export const DarkModeContext = createContext<DarkModeContextType>(InitialState)

export const DarkModeContextProvider = ({children}:PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(DarkModeReducer, InitialState);

    return <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
        {children}
    </DarkModeContext.Provider>
}