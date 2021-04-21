import React from 'react';
import { Provider } from 'react-redux';
import { create, act } from 'react-test-renderer';
import configureStore from '../../store/expense-store'

import expenses from '../fixtures/expenses';

import ExpenseListFilters from '../../components/ExpenseListFilters';

let store;
let renderer;

beforeEach(() => {
    const filters = {
        text: undefined,
        sortBy: 'createdAt',
        startDate: undefined,
        endDate: undefined
    }

    store = configureStore(expenses, filters);

    renderer = create(
        <Provider store={store}>
            <ExpenseListFilters />
        </Provider>
    );
});  

test('Should render ExpenseListFilters component correctly', () => {
    expect(renderer).toMatchSnapshot();
})

test('Should dispatch a setText action filter with changed data', () => {
    const filters = {
        text: expenses[0].title,
        sortBy: 'createdAt',
        startDate: undefined,
        endDate: undefined
    }

    const instance = renderer.root;

    act(() => {
        instance.findByProps({type: 'text'}).props.onChange({ target: { value: expenses[0].title } });
    });

    let state = store.getState().filters
    
    expect(state).toEqual(filters)
})

test('Should dispatch a sortByAmount action filter with changed data', () => {
    const filters = {
        text: undefined,
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const instance = renderer.root;

    act(() => {
        instance.findByType('select').props.onChange({ target: { value: 'amount' } });
    });

    let state = store.getState().filters
    
    expect(state).toEqual(filters)
})

test('Should dispatch a setDateFilters action filter with changed data', () => {
    let filters = {
        text: undefined,
        sortBy: 'createdAt',
        startDate: new Date('2021-01-01'),
        endDate: undefined
    }

    const instance = renderer.root;

    act(() => {
        instance.findByProps({name: 'startDate'}).props.onChange({ target: { value: new Date('2021-01-01') } });
    });

    let state = store.getState().filters
    
    expect(state).toEqual(filters)

    filters = {
        text: undefined,
        sortBy: 'createdAt',
        startDate: new Date('2021-01-01'),
        endDate: new Date('2021-12-31')
    }

    act(() => {
        instance.findByProps({name: 'endDate'}).props.onChange({ target: { value: new Date('2021-12-31') } });
    });

    state = store.getState().filters

    expect(state).toEqual(filters)
})