import "./ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <div className="expense_items">
      <div className="expense_items_date">
        {props.date.toISOString()}
        {/* <div className="expense_date">15</div>
        <div className="expense_month">Feburary</div>
        <div className="expense_year">2023</div> */}
      </div>
      <div className="expense_items_title"> {props.title} </div>
      <div className="expense_items_amount"> $ {props.amount}</div>
    </div>
  );
}

export default ExpenseItems;
