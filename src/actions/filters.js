export const setTextFilter = function(text = undefined) {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

export const sortByAmount = function() {
    return {
        type: 'SORT_BY',
        sortBy: 'amount'
    }
}

export const sortByDate = function() {
    return {
        type: 'SORT_BY',
        sortBy: 'createdAt'
    }
}

export const setDateFilters = function(startDate = undefined, endDate = undefined) {
    return {
        type: 'SET_DATE_FILTERS',
        dates: {
            startDate,
            endDate
        }
    }
}
