export default function(expenses, {text, sortBy, startDate, endDate}) {
    const result = expenses.filter((expense) => {
        const textMatch = typeof text == 'undefined' || expense.title.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate == 'undefined' || expense.createdAt > startDate;
        const endDateMatch = typeof endDate == 'undefined' || expense.createdAt < endDate;

        return textMatch && startDateMatch && endDateMatch;
    })

    if (sortBy) {
        return result.sort((e1, e2) => {
            if (e1[sortBy] < e2[sortBy]) {
                return -1;
            } else if (e1[sortBy] > e2[sortBy]) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    return result;
}
