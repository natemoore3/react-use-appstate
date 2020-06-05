import { useContext } from 'react'
import AppStateContext from './AppStateContext'

export default function useAppState(): [TAppState, TSetState] {
    const { state, setState } = useContext(AppStateContext)
    return [state, setState]
}
