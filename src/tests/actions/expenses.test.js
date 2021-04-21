import {addExpense, editExpense, removeExpense} from '../../actions/expenses'
import uuid from 'uuid'

const id = uuid()

test('Should setup remove expense object', () => {    
    const action = removeExpense(id)
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: id
    })
})

test('Should setup edit expense object', () => {
    const action = editExpense(id, { title: 'test', amount: 0 });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        expense: {
            title: 'test',
            amount: 0
        }
    })
})

test('Should setup add expense object with provided values', () => {
    const action = addExpense({ title: 'test', amount: 1 })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            title: 'test',
            amount: 1,
            createdAt: expect.any(Number)
        }
    })
})

test('Should setup add expense object with default values', () => {
    const action = addExpense({})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            title: '',
            amount: 0,
            createdAt: expect.any(Number)
        }
    })
})