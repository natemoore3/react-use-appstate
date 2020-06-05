import React, { useReducer } from 'react'
import createInitialState from './utils/stateHelpers/createInitialState'
import AppStateContext from './AppStateContext'
import appStateReducer from './appStateReducer'

export default function AppStateProvider({
    children,
    initialState
}: IAppStateProvider): React.ReactElement {
    const [state, dispatch] = useReducer(
        appStateReducer,
        createInitialState(initialState)
    )

    function setState(payload: TAppState) {
        dispatch({
            type: 'SET_STATE',
            payload
        })
    }

    return (
        <AppStateContext.Provider value={{ state, setState }}>
            {children}
        </AppStateContext.Provider>
    )
}
