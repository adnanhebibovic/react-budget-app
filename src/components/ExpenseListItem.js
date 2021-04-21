import React from 'react'
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom'

function ExpenseListItem({id, title, amount, createdAt}) {
    return (
        <div>
            <NavLink to={`/expenses/${id}`}>
                <h3>{title}</h3>
            </NavLink>
            <p>{amount}</p>
            <Moment>{createdAt}</Moment>
        </div>
    )
}

export default ExpenseListItem 