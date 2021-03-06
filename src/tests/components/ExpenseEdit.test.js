import React from 'react';
import { Provider } from 'react-redux';
import { create, act } from 'react-test-renderer';
import configureStore from '../../store/expense-store'

import ExpenseEdit from '../../components/ExpenseEdit';
import expenses from '../fixtures/expenses';

jest.mock('../../actions/expenses', () => ({
    ...jest.requireActual('../../actions/expenses'),
    editExpense: jest.fn(),
    removeExpense: jest.fn()
}))

jest.mock('react-router-dom', () => ({
    useHistory: jest.fn(),
    useParams: jest.fn()
}));

import { useParams, useHistory } from 'react-router-dom'
import { editExpense, editExpenseInStore, removeExpense, removeExpenseFromStore } from '../../actions/expenses'

let store;
let renderer;

beforeEach(() => {
    useHistory.mockImplementation(() => ({
        push: jest.fn()
    }))

    editExpense.mockImplementation((uid, id, expense) => {
        return function(dispatch) {
          dispatch(editExpenseInStore(id, expense))
        }
    })

    removeExpense.mockImplementation((uid, id) => {
        return function(dispatch) {
            dispatch(removeExpenseFromStore(id))
          }
    })

    useParams.mockImplementation(() => ({
        id: expenses[0].id
    }))

    store = configureStore(expenses);

    renderer = create(
        <Provider store={store}>
            <ExpenseEdit />
        </Provider>
    );
});  

test('Should render ExpenseEdit component correctly', () => {
    expect(renderer).toMatchSnapshot();
})

test('Should dispatch an edit action with changed data', () => {
    let expectedState = {
        id: expenses[0].id,
        title: expenses[0].title,
        amount: expenses[0].amount,
        createdAt: expect.any(Number)
    }
    
    let state = store.getState().expenses.filter((e) => e.id == expenses[0].id)
    
    expect(state).toEqual([expectedState])

    const instance = renderer.root;

    act(() => {
        instance.findByProps({type: 'text'}).props.onChange({ target: { value: expenses[1].title } });
    });
    act(() => {
        instance.findByProps({type: 'number'}).props.onChange({ target: { value: expenses[1].amount } });
    });
    act(() => {
        instance.findByType('form').props.onSubmit({ preventDefault: () => jest.fn() });
    });

    expectedState = {
        id: expenses[0].id,
        title: expenses[1].title,
        amount: expenses[1].amount,
        createdAt: expect.any(Number)
    }
    
    state = store.getState().expenses.filter((e) => e.id == expenses[0].id)
    
    expect(state).toEqual([expectedState])
})

test('Should dispatch a remove action with changed data', () => {
    let expectedState = {
        id: expenses[0].id,
        title: expenses[0].title,
        amount: expenses[0].amount,
        createdAt: expect.any(Number)
    }
    
    let state = store.getState().expenses.filter((e) => e.id == expenses[0].id)
    
    expect(state).toEqual([expectedState])

    const instance = renderer.root;

    act(() => {
        instance.findByType('button').props.onClick();
    });

    state = store.getState().expenses.filter((e) => e.id == expenses[0].id)

    expect(state).toEqual([])
})
