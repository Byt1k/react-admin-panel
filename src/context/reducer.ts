import {InitialStateType} from "./context";
import {InferValuesType} from "../types/types";
import {debug} from "util";

export const reducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'LIGHT_MODE':
            return ({
                ...state,
                darkMode: false
            })
        case 'DARK_MODE':
            return ({
                ...state,
                darkMode: true
            })
        case 'TOGGLE_COLOR_SCHEME':
            return ({
                ...state,
                darkMode: !state.darkMode
            })
        case 'SET_FULL_SCREEN':
            return ({
                ...state,
                fullScreen: action.isFullScreen
            })
        default: throw new Error()
    }
}

export const actionsContext = {
    setDarkMode: () => ({type: 'DARK_MODE'} as const),
    setLightMode: () => ({type: 'LIGHT_MODE'} as const),
    toggleMode: () => ({type: 'TOGGLE_COLOR_SCHEME'} as const),
    setFullScreen: (isFullScreen: boolean) => ({type: 'SET_FULL_SCREEN', isFullScreen} as const)
}

export type ActionsType = InferValuesType<typeof actionsContext>
