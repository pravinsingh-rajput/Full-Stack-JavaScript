import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";

function Expense(props) {
  return (
    <Card className="display_expense_items">
      {props.items.map((expenses) => (
        <ExpenseItems
          date={expenses.date}
          title={expenses.title}
          amount={expenses.amount}
        />
      ))}
    </Card>
  );
}

export default Expense;
