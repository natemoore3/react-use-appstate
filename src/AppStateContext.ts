import { createContext } from 'react'

const AppStateContext = createContext<IAppStateContext>({
    state: {},
    setState: () => {}
})

export default AppStateContext
