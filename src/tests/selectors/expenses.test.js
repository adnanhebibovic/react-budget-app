import select from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

test('Should filter by text value', () => {
    const result = select(expenses, { text: 'd' })
    expect(result).toEqual([expenses[1], expenses[2]])
})

test('Should filter by start date', () => {
    const result = select(expenses, { startDate: new Date('03-26-2015').getTime() })
    expect(result).toEqual([expenses[1], expenses[2]])
})

test('Should filter by end date', () => {
    const result = select(expenses, { endDate: new Date('03-27-2015').getTime() })
    expect(result).toEqual([expenses[0], expenses[3]])
})

test('Should sort by date', () => {
    const result = select(expenses, {sortBy: 'createdAt'})
    expect(result).toEqual([expenses[0], expenses[3], expenses[2], expenses[1]])
})

test('Should sort by amount', () => {
    const result = select(expenses, {sortBy: 'amount'})
    expect(result).toEqual([expenses[3], expenses[2], expenses[0], expenses[1]])
})

