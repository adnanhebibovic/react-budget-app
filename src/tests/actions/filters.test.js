import {sortByDate, sortByAmount, setTextFilter, setDateFilters} from '../../actions/filters'

test('Should setup sort by amount object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY',
        sortBy: 'amount'
    })
})

test('Should setup sort by date object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY',
        sortBy: 'createdAt'
    })
})

test('Should setup text filter object with provided value', () => {
    const action = setTextFilter('abc')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'abc'
    })
})

test('Should setup text filter object with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: undefined
    })
})

test('Should setup date filter object with provided value', () => {
    const startDate = new Date().getTime()
    const endDate = new Date().getTime()

    const action = setDateFilters(startDate, endDate)

    expect(action).toEqual({
        type: 'SET_DATE_FILTERS',
        dates: {
            startDate,
            endDate
        }
    })
})