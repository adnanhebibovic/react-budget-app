import React from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

function ExpenseEdit(props) {
    let { id } = useParams()
    let history = useHistory()

    function onSubmit(expense) {
        props.editExpense(props.uid, id, expense)
        history.push('/')
    }

    function onRemove() {
        props.removeExpense(props.uid, id)
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

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        uid: state.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (uid, id, expense) => dispatch(startEditExpense(uid, id, expense)),
        removeExpense: (uid, id) => dispatch(startRemoveExpense(uid, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)
