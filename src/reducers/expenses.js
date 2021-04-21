export const expensesDefaultState = []

export default function(state = expensesDefaultState, action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => expense.id == action.id 
                ? {...expense, ...action.expense}
                : expense
            )
        default:
            return state;
    }
}