import { AppMain } from './components/ExpenseItem/ExpenseItemStyles';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 90.12,
    date: new Date(2021, 7, 7)
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 1000,
    date: new Date(2021, 7, 16)
  },
  {
    id: 'e3',
    title: 'Moanaco',
    amount: 2.12,
    date: new Date(2021, 5, 12)
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <AppMain>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </AppMain>
  );
}

export default App;