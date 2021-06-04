import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import select from '../selectors/expenses'

export function ExpenseList(props) {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            {props.expenses.length == 0 && <div className="list-item list-item--empty"><span>Please create an expense to get started!</span></div>}
            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: select(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
