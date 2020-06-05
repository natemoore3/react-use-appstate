type TAppState = {}
type TAction = { type: 'SET_STATE'; payload: Object }
type TSetState = (payload: TAppState) => void

interface IAppStateContext {
    state: TAppState
    setState: TSetState
}

interface IAppStateProvider {
    children: Object
    initialState: Object
}
