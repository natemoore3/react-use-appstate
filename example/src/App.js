import React from 'react'
import { AppStateProvider } from 'react-use-appstate'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import intialState from './hooks/intialState'
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'

export default function App() {
    const basename = process.env.NODE_ENV === 'development'
        ? '/'
        : process.env.PUBLIC_URL;

    return (
        <AppStateProvider initialState={intialState}>
            <Router basename={basename}>
                <Switch>
                    <Route path='/finish'>
                        <StepTwo />
                    </Route>
                    <Route path='/'>
                        <StepOne />
                    </Route>
                </Switch>
            </Router>
        </AppStateProvider>
    )
}
