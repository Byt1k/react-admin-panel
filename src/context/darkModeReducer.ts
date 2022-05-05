import {InitialStateType} from "./darkModeContext";
import {InferValuesType} from "../types/types";

export const DarkModeReducer = (state: InitialStateType, action: ActionsType) => {
    switch (action.type) {
        case 'LIGHT':
            return ({
                darkMode: false
            })
        case 'DARK':
            return ({
                darkMode: true
            })
        case 'TOGGLE':
            return ({
                darkMode: !state.darkMode
            })
    }
}

export const actionsDarkMode = {
    setDarkMode: () => ({type: 'DARK'} as const),
    setLightMode: () => ({type: 'LIGHT'} as const),
    toggleMode: () => ({type: 'TOGGLE'} as const)
}

export type ActionsType = InferValuesType<typeof actionsDarkMode>
