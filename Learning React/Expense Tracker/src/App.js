import "./App.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expense from "./Components/ExpenseItems/Expense";

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
      <Expense items={data} />
    </div>
  );
}

export default App;
