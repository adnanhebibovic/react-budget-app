import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';

import expensesReducer, {expensesDefaultState} from '../reducers/expenses'
import filtersReducer, {filtersDefaultState} from '../reducers/filters'
import authReducer from '../reducers/auth'

export default function(preloadedExpensesState = expensesDefaultState, preloadedFiltersState = filtersDefaultState) {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        {
            expenses: preloadedExpensesState,
            filters: preloadedFiltersState,
            auth: {}
        },
        applyMiddleware(thunk)
    )

    return store;
}
