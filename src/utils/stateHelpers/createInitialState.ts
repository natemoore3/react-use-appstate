export default function createInitialState(initialState: TAppState) {
    return Object.keys(initialState).reduce(
        (obj, key) => ({
            ...obj,
            [key]: {
                data: initialState[key],
                loading: false,
                error: null
            }
        }),
        {}
    )
}
