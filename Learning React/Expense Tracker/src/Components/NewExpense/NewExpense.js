import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

import Card from "../UI/Card";

function NewExpense() {
  return (
    <Card className="new_expense">
      <ExpenseForm />
    </Card>
  );
}

export default NewExpense;
