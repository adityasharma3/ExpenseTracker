import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = (props) => {
  // component for when 'props.items' are not null
  const ExpenseItemDisplay = () => {
    // console.log(props);
    return (
      <div>
        {props.items.map((item) => {
          return <ExpenseItem key={item.id} items={item} />;
        })}
      </div>
    );
  };

  // component for when 'props.items' are null
  const NoExpenses = () => {
    return (
      <div className="no-expenses">
        <h2>No expenses added yet</h2>
      </div>
    );
  };

  return <div>{!props.items ? <NoExpenses /> : <ExpenseItemDisplay />}</div>;
};
export default Expenses;
