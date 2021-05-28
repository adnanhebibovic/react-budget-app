import {count, total} from '../../selectors/expenses-statistics'
import expenses from '../fixtures/expenses'

test('Should sum by amount value', () => {
    const result = total(expenses)
    expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount + expenses[3].amount)
})

test('Should count expenses', () => {
    const result = count(expenses)
    expect(result).toEqual(expenses.length)
})