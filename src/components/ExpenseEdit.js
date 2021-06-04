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

    function onCancelClick() {
        history.goBack();
    }

    return (
        <div>
            
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit an expense</h1>
                    <div className="page-header__actions">
                        <button form="expenseForm" className="button" type="submit">Save</button>
                        <button className="button" onClick={onCancelClick}>Cancel</button>
                        <button className="button" onClick={onRemove}>Remove</button>
                    </div>
                </div>            
            </div>
            <ExpenseForm expense={props.expenses.find((e) => e.id === id)} onSubmit={onSubmit}/>
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
