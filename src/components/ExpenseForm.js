import React, { useState } from 'react'

export default function(props) {
    const [title, setTitle] = useState(props.expense ? props.expense.title : '')
    const [amount, setAmount] = useState(props.expense ? props.expense.amount : '')
    const [error, setError] = useState('')

    function onFormSubmit(e) {
        e.preventDefault();

        if (!(title || amount)) {
            setError('Please provide title and amount!')
        } else {
            props.onSubmit({
                title: title,
                amount: parseFloat(amount)
            })
        }
    }

    function onTextChange(e) {
        const title =  e.target.value;
        setTitle(title);
    }

    function onAmountChange(e) {
        const amount = e.target.value;
        setAmount(amount);
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    autoFocus
                    value={title}
                    onChange={onTextChange}></input>
                    
                <input 
                    type="number" 
                    placeholder="Amount"
                    value={amount}
                    onChange={onAmountChange}></input>

                <input type="submit" value="Save"></input>
            </form>
        </div>
    )    
}
