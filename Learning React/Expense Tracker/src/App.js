import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";

import ExpenseItems from "./Components/ExpenseItems/ExpenseItems";

function App() {
  // Data

  const data = [
    {
      id: "e1",
      date: new Date(2023, 1, 20),
      title: "Electric Bill",
      amount: 500,
    },
    {
      id: "e2",
      date: new Date(2023, 0, 28),
      title: "Desktop",
      amount: 1230,
    },
    {
      id: "e3",
      date: new Date(2023, 0, 15),
      title: "Books",
      amount: 208,
    },
  ];

  const addexpense = (expense) => {
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onSaveNewExpense={addexpense} />
      <Card className="display_expense_items">
        <ExpenseItems
          date={data[0].date}
          title={data[0].title}
          amount={data[0].amount}
        />
        <ExpenseItems
          date={data[1].date}
          title={data[1].title}
          amount={data[1].amount}
        />
        <ExpenseItems
          date={data[2].date}
          title={data[2].title}
          amount={data[2].amount}
        />
      </Card>
    </div>
  );
}

export default App;
