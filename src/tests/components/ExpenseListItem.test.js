import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { create, act } from 'react-test-renderer';

import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('Should render ExpenseListItem with expenses', () => {
    let root
    act(() => {
        root = create(<BrowserRouter><ExpenseListItem {...expenses[0]}></ExpenseListItem></BrowserRouter>)
    });
    expect(root).toMatchSnapshot()
})
