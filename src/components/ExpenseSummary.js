import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'

import {count, total} from '../selectors/expenses-statistics'
import select from '../selectors/expenses'

function ExpenseSummary(props) {
    return (
        <div>
            <h2>Viewing {count(props.expenses)} {count(props.expenses) === 1 ? 'expense' : 'expenses'} totalling {numeral(total(props.expenses)).format('$0,0[.]00')}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: select(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)