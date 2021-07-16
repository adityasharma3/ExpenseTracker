import React from 'react'
import Card from './Card';
import { ExpenseDate, ExpenseDescription, ExpenseItemBar, ExpenseAmount } from './ExpenseItemStyles';

const ExpenseItem = (props) => {
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
            </ExpenseItemBar>
        </Card>

    )
}

export default ExpenseItem
