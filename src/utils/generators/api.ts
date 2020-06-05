import useAppState from '../../useAppState'
import { setLoading, setError } from '../stateHelpers'

export default function api(name: string, apiFunctions: Object) {
    const [state, setState] = useAppState()

    return Object.keys(apiFunctions).reduce(
        (obj, key) => ({
            ...obj,
            [key]: async (payload: Object) => {
                try {
                    setLoading(name, setState, true)
                    await apiFunctions[key](payload, state, setState)
                } catch (error) {
                    setError(name, setState, error)
                } finally {
                    setLoading(name, setState, false)
                }
            }
        }),
        {}
    )
}
