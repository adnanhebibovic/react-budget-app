import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary';

export default function ExpenseDashboard() {
    return (
        <div>
            <h1>Expense dashboard</h1>
            <ExpenseListFilters></ExpenseListFilters>
            <ExpenseSummary></ExpenseSummary>
            <ExpenseList></ExpenseList>
        </div>
    );
}