import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startAddExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

function ExpenseAdd(props) {
    let history = useHistory()

    function onSubmit(expense) {
        props.addExpense(expense);
        history.push('/');
    } 

    return (
        <div>
           <h1>Create Expense</h1>
            <ExpenseForm onSubmit={onSubmit}></ExpenseForm>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseAdd)
