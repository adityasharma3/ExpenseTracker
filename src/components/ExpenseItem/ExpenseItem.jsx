import React, { useState } from 'react'
import Card from './Card';
import { ExpenseDate, ExpenseDescription, ExpenseItemBar, ExpenseAmount } from './ExpenseItemStyles';

const ExpenseItem = (props) => {
    const [title , setTitle] = useState(props.title);

    const expenseAmount = 12;

    let today = new Date();
    today = today.toDateString();

    const clickEvent = () => {
        console.log("hihihi");
        setTitle('Owl Owls');
    }

    return (
        <Card>
            <ExpenseItemBar>
                <ExpenseDate>
                    <h2> {props.items.date.toDateString()} </h2>
                </ExpenseDate>

                <ExpenseDescription>
                    <h2> {props.items.title} </h2>
                </ExpenseDescription>

                <ExpenseAmount>
                    <h2> {props.items.amount} </h2>
                </ExpenseAmount>
                <button onClick={clickEvent}>Change title</button>
            </ExpenseItemBar>
        </Card>

    )
}

export default ExpenseItem
