import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';

import expensesReducer, {expensesDefaultState} from '../reducers/expenses'
import filtersReducer, {filtersDefaultState} from '../reducers/filters'

export default function(preloadedExpensesState = expensesDefaultState, preloadedFiltersState = filtersDefaultState) {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        {
            expenses: preloadedExpensesState,
            filters: preloadedFiltersState
        },
        applyMiddleware(thunk)
    )

    return store;
}

