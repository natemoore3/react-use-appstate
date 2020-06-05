export default function setLoading(
    name: string,
    setState: TSetState,
    value: Object
) {
    setState({
        [name]: {
            loading: value
        }
    })
}
