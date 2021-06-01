import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

import ExpenseAdd from './ExpenseAdd'
import ExpenseEdit from './ExpenseEdit'

function ExpensePage(props) {

    if (!props.isAuthenticated) {
        return (
            <Redirect to="/"></Redirect>
        )
    }

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

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(ExpensePage)
