import { AppMain } from './components/ExpenseItem/ExpenseItemStyles';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Footer from './components/Footer/Footer';

function App() {

  const [expenses, setExpenses] = useState('');
  const [currentExp, setCurrentExp] = useState(0);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const getExpenses = (exp) => {
    setCurrentExp((prev) => {
      return (parseInt(prev) + parseInt(exp));
    });
  };

  return (
    <AppMain>
      <NewExpense
        onAddExpense={addExpenseHandler}
        total={getExpenses}
      />
      <Expenses items={expenses} />
      <Footer displayExpenses={currentExp} />
    </AppMain>
  );
}

export default App;