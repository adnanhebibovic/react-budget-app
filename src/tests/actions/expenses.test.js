import {addExpenseToStore, editExpenseInStore, removeExpenseFromStore} from '../../actions/expenses'
import uuid from 'uuid'

const id = uuid()

test('Should setup remove expense object', () => {    
    const action = removeExpenseFromStore(id)
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: id
    })
})

test('Should setup edit expense object', () => {
    const action = editExpenseInStore(id, { title: 'test', amount: 0 });
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
    const action = addExpenseToStore({ id: uuid(), title: 'test', amount: 1, createdAt: new Date().getTime() })
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

test('Should setup add expense object with no values', () => {
    const action = addExpenseToStore({})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {}
    })
})