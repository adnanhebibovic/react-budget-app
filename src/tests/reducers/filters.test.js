import reducer from '../../reducers/filters'

test('Should setup default filter values', () => {
    const state = reducer(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: undefined,
        sortBy: 'createdAt',
        startDate: undefined,
        endDate: undefined
    })
})

test('Should set sortBy to amount', () => {
    const state = reducer(undefined, { type: 'SORT_BY', sortBy: 'amount' })
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const state = reducer({ 
        text: undefined,
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined }, { 
        type: 'SORT_BY', 
        sortBy: 'date' })

    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const state = reducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test' })
    expect(state.text).toBe('test')
})

test('Should set start date filters', () => {
    const date = new Date('03-25-2015').getTime()
    const state = reducer(undefined, { 
        type: 'SET_DATE_FILTERS', 
        dates: {
            startDate: date,
            endDate: undefined
        } 
    })
    expect(state.startDate).toBe(date)
})

test('Should set end date filters', () => {
    const date = new Date('03-25-2015').getTime()
    const state = reducer(undefined, { 
        type: 'SET_DATE_FILTERS', 
        dates: {
            startDate: undefined,
            endDate: date
        } 
    })
    expect(state.endDate).toBe(date)
})