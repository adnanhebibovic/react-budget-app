import db from '../db/firebase'
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

export const addExpense = function(expense = {}) {
    const defaults = {
        createdAt: new Date().getTime(),
        ...expense
    }

    return function(dispatch) {
        return db.collection('expenses').add(defaults)
        .then((doc) => {
            dispatch(addExpenseToStore({
                id: doc.id,
                ...defaults
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

export const removeExpense = function(id) {
    return function(dispatch) {
        return db.collection('expenses').doc(id).delete()
        .then(() => {
            dispatch(removeExpenseFromStore(id))
        })
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

export const editExpense = function(id, expense) {
    return function(dispatch) {
        return db.collection('expenses').doc(id).update(expense)
        .then(() => {
            dispatch(editExpenseInStore(id, expense))
        })
    }
}