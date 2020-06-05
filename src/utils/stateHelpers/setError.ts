export default function setError(
    name: string,
    setState: TSetState,
    value: Object
) {
    setState({
        [name]: {
            error: value
        }
    })
}
