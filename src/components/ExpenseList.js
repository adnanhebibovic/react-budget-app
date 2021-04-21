import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export function ExpenseList(props) {
    return (
        <div>
            <h2>Expense list</h2>
            {props.expenses.length == 0 && <p>Please create an expense to get started!</p>}
            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
