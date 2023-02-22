import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titlehandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amounthandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const datehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="Expense_form_Controls">
        <div className="Expense_form_control">
          <label>Title</label>
          <input
            type="text"
            required
            value={enteredTitle}
            onChange={titlehandler}
          />
        </div>
        <div className="Expense_form_control">
          <label>Amount</label>
          <input
            type="number"
            required
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amounthandler}
          />
        </div>
        <div className="Expense_form_control">
          <label>Date</label>
          <input
            type="date"
            required
            value={enteredDate}
            onChange={datehandler}
          />
        </div>
      </div>
      <div className="new_expense_action">
        <button type="submit" className="submit_btn">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
