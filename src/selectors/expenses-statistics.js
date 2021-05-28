export const total = function(expenses) {
    let total = 0;
    expenses.forEach(expense => {
        total += expense.amount;       
    });
    return total;
}

export const count = function(expenses) {
    return expenses.length;
}