import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [amount, setAmount] = useState(0);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const totalAmountHandler = (amt) => {
    props.total(parseFloat(amt));
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        totalExpenes={totalAmountHandler}
      />
    </div>
  );
};

export default NewExpense;
