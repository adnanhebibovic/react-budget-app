import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary';

export function ExpenseDashboard(props) {

    if (!props.isAuthenticated) {
        return (
            <Redirect to="/"></Redirect>
        )
    }
    
    return (
        <div>
            <h1>Expense dashboard</h1>
            <ExpenseListFilters></ExpenseListFilters>
            <ExpenseSummary></ExpenseSummary>
            <ExpenseList></ExpenseList>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(ExpenseDashboard)