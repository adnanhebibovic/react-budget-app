import firestore from '../services/firebase'
import {v4 as uuid} from 'uuid'

export const addExpenseToStore = function(expense = {}) {
    const defaults = {
        id: new uuid(),
        title: '',
        amount: 0,
        createdAt: new Date().getTime(),
        ...expense
    };

    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: defaults.id,
            title: defaults.title,
            amount: defaults.amount,
            createdAt: defaults.createdAt
        }
    };
}

export const setExpensesInStore = function(expenses = []) {
    return {
        type: 'SET_EXPENSE',
        expenses
    }
}

export const removeExpenseFromStore = function(id) {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const editExpenseInStore = function(id, expense) {
    const defaults = {
        title: '',
        amount: 0,
        ...expense
    };

    return {
        type: 'EDIT_EXPENSE',
        id,
        expense: defaults
    }
}

export const startAddExpense = function(uid, expense = {}) {
    const defaults = {
        createdAt: new Date().getTime(),
        ...expense
    }

    return function(dispatch) {
        const user = firestore.collection('users').doc(uid)
        return user.collection('expenses').add(defaults)
        .then((doc) => {
            dispatch(addExpenseToStore({
                id: doc.id,
                ...defaults
            }))
        })
    }
}

export const startRemoveExpense = function(uid, id) {
    return function(dispatch) {
        const user = firestore.collection('users').doc(uid)
        return user.collection('expenses').doc(id).delete()
        .then(() => {
            dispatch(removeExpenseFromStore(id))
        })
    }
}

export const startEditExpense = function(uid, id, expense) {
    return function(dispatch) {
        const user = firestore.collection('users').doc(uid)
        return user.collection('expenses').doc(id).update(expense)
        .then(() => {
            dispatch(editExpenseInStore(id, expense))
        })
    }
}

export const startSetExpense = function(uid) {
    return function(dispatch) {
        const user = firestore.collection('users').doc(uid)
        return user.collection('expenses').get()
        .then((snapshot) => {
            const expenses = []
            snapshot.forEach((document) => {
                expenses.push({
                    id: document.id, 
                    ...document.data()
                })
            })
            return expenses;
        }).then((result) => {
            dispatch(setExpensesInStore(result))
        })
    }
}