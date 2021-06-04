import React from 'react'
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom'
import numeral from 'numeral'

function ExpenseListItem({id, title, amount, createdAt}) {
    return (
        <NavLink className="list-item" to={`/expenses/${id}`}>
            <div>
                <h3 className="list-item__title">{title}</h3>
                <span className="list-item__date"><Moment format="MMMM, Do YYYY">{createdAt}</Moment></span>
            </div>
            <h3 className="list-item__amount">{numeral(amount).format('$0,0[.]00')}</h3>
        </NavLink>
    )
}

export default ExpenseListItem 