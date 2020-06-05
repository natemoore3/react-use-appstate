import useAppState from './useAppState'
import {
    api as apiGenerator,
    action as actionGenerator,
    customAction as customActionGenerator
} from './utils/generators'

const generate = (name = '', { actions = {}, api = {} }) => () => {
    const [state] = useAppState()

    return {
        state: state[name],
        actions: {
            ...customActionGenerator(actions),
            ...actionGenerator(name)
        },
        api: apiGenerator(name, api)
    }
}

export default generate
