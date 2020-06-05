import useAppState from '../../useAppState'

export default function customAction(actions: Object) {
    const [state, setState] = useAppState()

    return Object.keys(actions).reduce(
        (obj, key) => ({
            ...obj,
            [key]: (payload: Object) => {
                return actions[key](payload, state, setState)
            }
        }),
        {}
    )
}
