import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = function({title = '', amount = 0} = {}) {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            title,
            amount,
            createdAt: new Date()
        }
    }
}

const removeExpense = function(id = uuid()) {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

const editExpense = function(id = uuid(), expense = {}) {
    return {
        type: 'EDIT_EXPENSE',
        id,
        expense
    }
}

const expensesDefaultState = []

const expensesReducer = function(state = expensesDefaultState, action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => expense.id == action.id 
                ? {...expense, ...action.expense}
                : expense
            )
        default:
            return state;
    }
}

const setTextFilter = function(text = undefined) {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

const sortByAmount = function() {
    return {
        type: 'SORT_BY',
        sortBy: 'amount'
    }
}

const sortByDate = function() {
    return {
        type: 'SORT_BY',
        sortBy: 'createdAt'
    }
}

const setDateFilters = function({startDate = undefined, endDate = undefined} = {}) {
    return {
        type: 'SET_DATE_FILTERS',
        dates: {
            startDate,
            endDate
        }
    }
}

const filtersDefaultState = {
    text: undefined,
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = function(state = filtersDefaultState, action) {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_DATE_FILTERS':
            return {
                ...state,
                ...action.dates
            }
        default:
            return state;
    }
}

const getExpenses = function(expenses, {text, sortBy, startDate, endDate}) {
    const result = expenses.filter((expense) => {
        const textMatch = typeof text === 'undefined' || expense.title.includes(text);
        const startDateMatch = typeof startDate === 'undefined' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate === 'undefined' || expense.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    })

    if (sortBy)
    {
        return result.sort((e1, e2) => {
            if (e1[sortBy] < e2[sortBy]) {
                return -1;
            } else if (e1[sortBy] > e2[sortBy]) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    return result
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.dispatch(addExpense({
    title: 'January bills',
    amount: 279.00 
}))

store.dispatch(addExpense({
    title: 'February bills',
    amount: 523.00 
}))

store.dispatch(addExpense({
    title: 'March bills',
    amount: 358.00 
}))

store.dispatch(addExpense({
    title: 'New car',
    amount: 1000.00 
}))

store.subscribe(() => {
    const state = store.getState();
    console.log(getExpenses(state.expenses, state.filters))
})

store.dispatch(setTextFilter('bills'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
store.dispatch(setDateFilters({endDate: new Date()}))
