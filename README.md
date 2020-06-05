# react-use-appstate

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-use-appstate.svg)](https://www.npmjs.com/package/react-use-appstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

react-use-appstate provides simple, extensible API's to manage and maintain global app state without extraneous boilerplate and code overhead.

## Install

```bash
npm install --save react-use-appstate
```

## Basic Usage

#### App.js

```jsx
import { AppStateProvider } from 'react-use-appstate'

export default function App() {
    return (
        <AppStateProvider initialState={{ useForm: { name: '' } }}>
            <App />
        </AppStateProvider>
    )
}
```

### hooks/useForm.js

```jsx
import { generate } from 'react-use-appstate'

export default generate('useForm', {})
```

### Form.js

```jsx
import useForm from '../hooks/useForm'

export default function Form() {
    const {
        state,
        actions: { setState },
    } = useForm()

    return (
        <form>
            <input
                name="name"
                value={state.data.name}
                onChange={e => {
                    setState({
                        [e.target.name]: e.target.value
                    })
                }}
            >
        </form>
    )
}
```

### ThankYou.js

```jsx
import useForm from '../hooks/useForm'

export default function ThankYou() {
    const { state } = useForm()

    return <div>Thank you for submitting {state.data.name}</div>
}
```

## API Reference

### AppStateProvider

```jsx
import { AppStateProvider } from 'react-use-appstate'
```

#### Props

-   initialState (Object): Sets the initial state of your application

#### Example

```jsx
<AppStateProvider initialState={{ useForm: { name: '' } }}>
    <App />
</AppStateProvider>
```

### generate

Each hook generated should represent one resource. For example, if you have users and posts create two hooks, one for users and one for posts.

```jsx
import { generate } from 'react-use-appstate'
```

#### Arguments

-   name (String): Defines the name of the hook. This name should correclate to a top level object in your initial state
-   options (Object): used to define custom actions or API's
    -   api (Object)
    -   action (object)

#### Returns

-   state (Object): the state scoped to this specific hook
    -   data: (any)
    -   loading: (Boolean)
    -   error: (null || Error)
-   actions (Object): contains default and custom actions
    -   setState (function): function to set the state of data defined for the hook
    -   ...customActions (function)
-   api: (Object): contains custom api functions defined in the hook
    -   ...customApis (promise)

#### Example

```jsx
export default generate({
    name: 'useForm',
    /**
     * Expose a set of API's to fetch, update, create etc.
     * These must be created here, the hook will not
     * expose any default API's
     */
    api: {
        post: async (payload, appState, setAppState) => {
            const form = await fetch('http://example.com/form', {
                method: 'POST',
                body: JSON.stringify(payload)
            })
        }
    }
    /**
     * Create a set of reusable custom actions to manipulate data
     */
    actions: {
        pushData: (payload, appState, setAppState) => {
            setAppState({
                useForm: {
                    data: appState.useForm.data.concat([payload])
                }
            })
        }
    }
})
```

## License

MIT © [natemoore3](https://github.com/natemoore3)
