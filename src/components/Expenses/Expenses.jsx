import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const Expenses = (props) => {
    return (
        <div>
            <ExpenseItem items={props.items[0]} />
            <ExpenseItem items={props.items[1]} />
            <ExpenseItem items={props.items[2]} />
        </div>
    )
}

export default Expenses
