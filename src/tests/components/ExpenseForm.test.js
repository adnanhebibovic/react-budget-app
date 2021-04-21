import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Should render Expense form component', () => {
    act(() => {
        render(<ExpenseForm />, container);
    });
    expect(container).toMatchSnapshot()
})

test('Should render Expense form component with expense data', () => {
    act(() => {
        render(<ExpenseForm expense={expenses[0]}></ExpenseForm>, container)
    });
    expect(container).toMatchSnapshot()
})

test('Should render error for invalid ExpenseForm submission', () => {
    const onSubmit = jest.fn()
    act(() => {
        render(<ExpenseForm onSubmit={onSubmit}></ExpenseForm>, container)
    });
    const input = container.querySelector('input[type="submit"]');
    act(() => {
        input.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const label = container.querySelector('p');
    expect(label.textContent).toBe('Please provide title and amount!')
    expect(onSubmit).not.toHaveBeenCalled()
})

test('Should not render error for valid ExpenseForm submission', () => {
    const onSubmit = jest.fn()
    act(() => {
        render(<ExpenseForm expense={expenses[0]} onSubmit={onSubmit}></ExpenseForm>, container)
    });
    const input = container.querySelector('input[type="submit"]');
    act(() => {
        input.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const label = container.querySelector('p');
    expect(label).toBe(null)
    expect(onSubmit).toHaveBeenCalledWith({
        title: expenses[0].title,
        amount: expenses[0].amount
    })
})