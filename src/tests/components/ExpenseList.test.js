import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { create, act } from 'react-test-renderer';

import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('Should render ExpenseList with expenses', () => {
    let root
    act(() => {
        root = create(<BrowserRouter><ExpenseList expenses={expenses}></ExpenseList></BrowserRouter>)
    });
    expect(root).toMatchSnapshot()
})

test('Should render ExpenseList with no expenses', () => {
    let root
    act(() => {
        root = create(<BrowserRouter><ExpenseList expenses={[]}></ExpenseList></BrowserRouter>)
    });
    expect(root).toMatchSnapshot()
})