import {addExpenseToStore, editExpenseInStore, removeExpenseFromStore, addExpense} from '../../actions/expenses'
import {v4 as uuid} from 'uuid'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import expenses from '../fixtures/expenses';

const mockStore = configureStore([thunk]);

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
    const action = addExpenseToStore({ id: id, title: 'test', amount: 1, createdAt: new Date().getTime() });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: id,
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
        expense: {
            id: expect.any(uuid),
            title: '',
            amount: 0,
            createdAt: expect.any(Number)
        }
    })
})

