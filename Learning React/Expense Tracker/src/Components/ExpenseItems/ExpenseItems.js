import "./ExpenseItems.css";
import React from "react";

function ExpenseItems(props) {
  const day = props.date.toLocaleString(navigator.language, { day: "2-digit" });
  const month = props.date.toLocaleString(navigator.language, {
    month: "long",
  });
  const year = props.date.getFullYear();

  return (
    <div className="expense_items">
      <div className="expense_items_date">
        <div className="expense_month">{month}</div>
        <div className="expense_year">{year}</div>
        <div className="expense_date">{day}</div>
      </div>
      <div className="expense_items_title"> {props.title} </div>
      <div className="expense_items_amount"> $ {props.amount}</div>
    </div>
  );
}

export default ExpenseItems;
