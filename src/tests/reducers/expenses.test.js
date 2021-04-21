import reducer from '../../reducers/expenses'

test('Should setup state with default value', () => {
    const result = reducer(undefined, { type: '@@INIT' })
    expect(result).toEqual([])
})

test('Should add new expense using reducer', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 1,
            title: 'first expense',
            amount: 400,
            createdAt: new Date('03-25-2015').getTime()
        }
    }
    
    const result = reducer(undefined, action);
    
    expect(result).toEqual([{
        id: 1,
        title: 'first expense',
        amount: 400,
        createdAt: new Date('03-25-2015').getTime()
    }])
})

test('Should edit existing expense using reducer', () => {
    const expenses = [{
        id: 2,
        title: 'second expense',
        amount: 500,
        createdAt: new Date('03-28-2015').getTime()
    }]

    const action = {
        type: 'EDIT_EXPENSE',
        id: 2,
        expense: {
            title: 'only expense',
            amount: 10
        }
    }

    const result = reducer(expenses, action)

    expect(result).toEqual([{
        id: 2,
        title: 'only expense',
        amount: 10,
        createdAt: new Date('03-28-2015').getTime()
    }])
})

test('Should delete existing expense using reducer', () => {
    const expenses = [{
        id: 2,
        title: 'second expense',
        amount: 500,
        createdAt: new Date('03-28-2015').getTime()
    }, {
        id: 3,
        title: 'third expense',
        amount: 200,
        createdAt: new Date('03-27-2015').getTime()
    }]

    const action = {
        type: 'REMOVE_EXPENSE',
        id: 3
    }

    const result = reducer(expenses, action);

    expect(result).toEqual([{
        id: 2,
        title: 'second expense',
        amount: 500,
        createdAt: new Date('03-28-2015').getTime()
    }])
})