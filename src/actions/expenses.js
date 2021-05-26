import db from '../db/firebase'

export const addExpenseToStore = function(expense = {}) {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: expense.id,
            title: expense.title,
            amount: expense.amount,
            createdAt: expense.createdAt
        }
    }
}

export const addExpense = function({title = '', amount = 0} = {}) {
    return function(dispatch) {
        const expense = {
            title: title,
            amount: amount,
            createdAt: new Date().getTime()
        }

        db.collection('expenses').add(expense)
        .then((doc) => {
            dispatch(addExpenseToStore({
                id: doc.id,
                ...expense
            }))
        })
    }
}

export const removeExpenseFromStore = function(id) {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const removeExpense = function(id = '') {
    return function(dispatch) {
        db.collection('expenses').doc(id).delete()
        .then(() => {
            dispatch(removeExpenseFromStore(id))
        })
    }
}

export const editExpenseInStore = function(id, expense) {
    return {
        type: 'EDIT_EXPENSE',
        id,
        expense
    }
}

export const editExpense = function(id = '', expense = {}) {
    return function(dispatch) {
        db.collection('expenses').doc(id).update(expense)
        .then(() => {
            dispatch(editExpenseInStore(id, expense))
        })
    }
}