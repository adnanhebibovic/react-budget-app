import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startAddExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

function ExpenseAdd(props) {
    let history = useHistory()

    function onSubmit(expense) {
        props.addExpense(props.uid, expense);
        history.push('/');
    } 

    function onCancelClick() {
        history.goBack();
    }

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Create an expense</h1>
                    <div className="page-header__actions">
                        <button form="expenseForm" className="button" type="submit">Save</button>
                        <button className="button" onClick={onCancelClick}>Cancel</button>
                    </div>
                </div>            
            </div>
            <ExpenseForm onSubmit={onSubmit}></ExpenseForm>
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
        addExpense: (uid, expense) => dispatch(startAddExpense(uid, expense))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseAdd)
