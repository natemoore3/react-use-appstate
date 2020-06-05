import produce from 'immer'
import merge from 'deepmerge'

export default function reducer(state: TAppState, action: TAction): TAppState {
    switch (action.type) {
        case 'SET_STATE': {
            const nextState = produce(state, (draftState) => {
                return merge(draftState, action.payload)
            })

            return nextState
        }
        default:
            throw new Error()
    }
}
