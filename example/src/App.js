import React from 'react'
import { AppStateProvider } from 'react-use-appstate'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import intialState from './hooks/intialState'
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'

export default function App() {
    return (
        <AppStateProvider initialState={intialState}>
            <Router>
                <Switch>
                    <Route path='/demo/step-one'>
                        <StepOne />
                    </Route>
                    <Route path='/demo/step-two'>
                        <StepTwo />
                    </Route>
                </Switch>
            </Router>
        </AppStateProvider>
    )
}
