import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="Expense_form_Controls">
        <div className="Expense_form_control">
          <label>Title</label>
          <input type="text" required />
        </div>
        <div className="Expense_form_control">
          <label>Amount</label>
          <input type="number" required />
        </div>
        <div className="Expense_form_control">
          <label>Date</label>
          <input type="date" required />
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
