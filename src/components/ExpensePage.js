import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

import ExpenseAdd from './ExpenseAdd'
import ExpenseEdit from './ExpenseEdit'

function ExpensePage() {
    let { path } = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <ExpenseAdd></ExpenseAdd>                    
                </Route>
                <Route path={`${path}/:id`}>
                    <ExpenseEdit></ExpenseEdit>
                </Route>
            </Switch>
        </div>
    );
}

export default ExpensePage;
