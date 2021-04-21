import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

export default function ExpenseDashboard() {
    return (
        <div>
            <h1>Expense dashboard</h1>
            <ExpenseListFilters></ExpenseListFilters>
            <ExpenseList></ExpenseList>
        </div>
    );
}