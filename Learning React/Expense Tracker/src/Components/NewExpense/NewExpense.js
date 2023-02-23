import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

import Card from "../UI/Card";

function NewExpense(props) {
  const saveExpenseHandler = (newenteredExpense) => {
    const newExpense = {
      ...newenteredExpense,
      id: Math.random().toString(),
    };

    props.onSaveNewExpense(newExpense);
  };

  return (
    <Card className="new_expense">
      
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </Card>
  );
}

export default NewExpense;
