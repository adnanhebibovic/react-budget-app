import React from 'react'
import {
    BrowserRouter,
    Route, 
    Switch } from 'react-router-dom'

import ExpenseDashboard from '../components/ExpenseDashboard'
import ExpensePage from '../components/ExpensePage';
import HelpPage  from '../components/HelpPage';
import NotFound  from '../components/NotFound'
import Header from '../components/Header'

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={ExpenseDashboard}></Route>
                    <Route path="/create" component={ExpensePage}></Route>
                    <Route path="/help" component={HelpPage}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}