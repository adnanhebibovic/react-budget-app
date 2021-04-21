import React from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { editExpense, removeExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

function ExpenseEdit(props) {
    let { id } = useParams()
    let history = useHistory()

    function onSubmit(expense) {
        props.editExpense(id, expense)
        history.push('/')
    }

    function onRemove() {
        props.removeExpense(id)
        history.push('/')
    }

    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm expense={props.expenses.find((e) => e.id === id)} onSubmit={onSubmit}/>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)
