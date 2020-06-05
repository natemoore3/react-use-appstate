import useAppState from '../../useAppState'

function generateCommonAction(name: string, setState: TSetState) {
    return {
        setState: (payload: Object) => {
            setState({
                [name]: {
                    data: payload
                }
            })
        }
    }
}

export default function action(name: string) {
    const [, setState] = useAppState()

    return {
        ...generateCommonAction(name, setState)
    }
}
