import './NewExpense.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const [sumofExpenses, setSumofExpenses] = useState(0);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        // creating an object to store the required information
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // making use of prop to send data from this component parent component.
        props.onSaveExpenseData(expenseData);

        setSumofExpenses(parseFloat(expenseData.amount));
        props.totalExpenes(parseFloat(expenseData.amount));


        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

    }

    return (
        <form className="expense-form" onSubmit={formSubmitHandler}>
            <div className="date-input">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    name="date"
                    onChange={dateChangeHandler}
                    value={enteredDate}
                />
            </div>

            <div className="desc-input">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    onChange={titleChangeHandler}
                    value={enteredTitle}
                />
            </div>

            <div className="cost-input">
                <label htmlFor="cost">Cost (₹)</label>
                <input
                    type='number'
                    name="cost"
                    onChange={amountChangeHandler}
                    value={enteredAmount}
                />
            </div>

            <button type="submit" className="expense-btn">
                Add expense
            </button>
        </form>
    )
}

export default ExpenseForm
