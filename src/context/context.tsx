import {createContext, Dispatch, PropsWithChildren, useReducer} from "react";
import {ActionsType, reducer} from "./reducer";

const InitialState = {
    darkMode: false,
    fullScreen: false
}

export type InitialStateType = typeof InitialState;
export type ContextType = InitialStateType | {dispatch: Dispatch<ActionsType>}

export const Context = createContext<ContextType>(InitialState)

export const ContextProvider = ({children}:PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(reducer, InitialState);

    return <Context.Provider value={{darkMode: state.darkMode, fullScreen: state.fullScreen, dispatch}}>
        {children}
    </Context.Provider>
}