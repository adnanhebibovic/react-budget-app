import React from 'react';
import { Provider } from 'react-redux';
import { create, act } from 'react-test-renderer';
import configureStore from '../../store/expense-store'

import expenses from '../fixtures/expenses';
import {removeExpenseFromStore} from '../../actions/expenses'
import ExpenseSummary from '../../components/ExpenseSummary';

let store;
let renderer;

beforeEach(() => {
    store = configureStore(expenses)
  
    renderer = create(
      <Provider store={store}>
        <ExpenseSummary />
      </Provider>
    );
});

test('Should render ExpenseSummary component correctly', () => {
    expect(renderer).toMatchSnapshot();
})

test('Should render ExpenseSummary component correctly with missing data', () => {
    act(() => {
        store.dispatch(removeExpenseFromStore(expenses[0].id));
    });
    
    act(() => {
        store.dispatch(removeExpenseFromStore(expenses[1].id));
    });

    act(() => {
        store.dispatch(removeExpenseFromStore(expenses[2].id));
    });

    act(() => {
        store.dispatch(removeExpenseFromStore(expenses[3].id));
    });

    expect(renderer).toMatchSnapshot();
})

