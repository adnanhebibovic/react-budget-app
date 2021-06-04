import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import { NavLink } from 'react-router-dom'

import {count, total} from '../selectors/expenses-statistics'
import select from '../selectors/expenses'

function ExpenseSummary(props) {
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{count(props.expenses)}</span> {count(props.expenses) === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(total(props.expenses)).format('$0,0[.]00')}</span></h1>
                <div className="page-header__actions">
                    <NavLink className="button" to="/expenses">Add expense</NavLink>
                </div>
            </div>            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: select(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)