import React from 'react'
import {
    Router,
    Route, 
    Switch } from 'react-router-dom'

import LoginPage from '../components/LoginPage'
import ExpenseDashboard from '../components/ExpenseDashboard'
import ExpensePage from '../components/ExpensePage';
import NotFound  from '../components/NotFound'
import Header from '../components/Header'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export default function App() {
    return (
        <Router history={history}>
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={LoginPage}></Route>
                    <Route path="/dashboard" component={ExpenseDashboard}></Route>
                    <Route path="/expenses" component={ExpensePage}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </Router>
    )
}