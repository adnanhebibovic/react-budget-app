import uuid from 'uuid'

export const addExpense = function({title = '', amount = 0} = {}) {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            title,
            amount,
            createdAt: new Date().getTime()
        }
    }
}

export const removeExpense = function(id = uuid()) {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const editExpense = function(id = uuid(), expense = {}) {
    return {
        type: 'EDIT_EXPENSE',
        id,
        expense
    }
}