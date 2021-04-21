import React from 'react';
import { Provider } from 'react-redux';
import { create, act } from 'react-test-renderer';
import configureStore from '../../store/expense-store'

import expenses from '../fixtures/expenses';
import ExpenseAdd from '../../components/ExpenseAdd';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}));

import { useHistory } from 'react-router-dom'

let store;
let renderer;

beforeEach(() => {
  useHistory.mockImplementation(() => ({
    push: jest.fn()
  }))

  store = configureStore()

  renderer = create(
    <Provider store={store}>
      <ExpenseAdd />
    </Provider>
  );
});

test('Should render ExpenseAdd component correctly', () => {
  expect(renderer).toMatchSnapshot();
})

test('Should not dispatch an add action with missing data', () => {
  const instance = renderer.root;

  act(() => {
    instance.findByType('form').props.onSubmit({ preventDefault: () => jest.fn() });
  });

  const state = store.getState().expenses

  expect(state).toEqual([])
})

test('Should dispatch an add action with valid data', () => {
  const instance = renderer.root;

  act(() => {
    instance.findByProps({type: 'text'}).props.onChange({ target: { value: expenses[0].title } });
  });
  act(() => {
    instance.findByProps({type: 'number'}).props.onChange({ target: { value: expenses[0].amount } });
  });
  act(() => {
    instance.findByType('form').props.onSubmit({ preventDefault: () => jest.fn() });
  });

  const expectedState = {
    id: expect.any(String),
    title: expenses[0].title,
    amount: expenses[0].amount,
    createdAt: expect.any(Number)
  }

  const state = store.getState().expenses

  expect(state).toEqual([expectedState])
})