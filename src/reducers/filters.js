export const filtersDefaultState = {
    text: undefined,
    sortBy: 'createdAt',
    startDate: undefined,
    endDate: undefined
}

export default function(state = filtersDefaultState, action) {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_DATE_FILTERS':
            return {
                ...state,
                ...action.dates
            }
        default:
            return state;
    }
}
