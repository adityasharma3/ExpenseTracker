import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const Expenses = (props) => {
  return (
    <div>
      {
        props.items.map((item) => {
          return (
            <ExpenseItem items={item} />
          );
        })
      }
    </div>
  )
}

export default Expenses
