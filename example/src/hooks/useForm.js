import { generate } from 'react-use-appstate'

export default generate('useForm', {
    api: {
        /**
         * Expose a set of API's to fetch, update, create etc. These must be created
         * here, the hook will not expose any default API's
         */
        get: async (query, appState, setAppState) => {
            await fetch('https://postman-echo.com/delay/2')
            const formResponse = await fetch(
                'https://postman-echo.com/get?firstName=Nathan'
            )
            const { args } = await formResponse.json()

            setAppState({
                useForm: {
                    data: {
                        firstName: args.firstName,
                    }
                }
            })
        }
    }
})
