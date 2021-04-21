import { createStore } from 'redux'

const increment = function({step = 1} = {}) {
    return {
        type: 'INCREMENT',
        step: step 
    }
}

const decrement = function({step = 1} = {}) {
    return {
        type: 'DECREMENT',
        step: step
    }
}

const reset = function() {
    return {
        type: 'RESET'
    }
}

const set = function({count = 0} = {}) {
    return {
        type: 'SET',
        count: count
    }
}

const reducer = (state = {count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increase = typeof action.step === 'number' ?  action.step : 1;
            return {
                count: state.count + increase
            }
        case 'DECREMENT':
            const decrease = typeof action.step === 'number' ?  action.step : 1;
            return {
                count: state.count - decrease
            }
        case 'RESET': 
            return {
                count: 0
            }
        case 'SET':
            const count = typeof action.count === 'number' ? action.count : 0;
            return {
                count: count
            }
        default:
            return state;
    }
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment({ step: 5 }))

store.dispatch(increment())

store.dispatch(decrement ({ step: 2 }))

store.dispatch(reset())

store.dispatch(decrement())

store.dispatch(set({ count: 10 }))
