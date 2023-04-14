import "./App.css";
import NewTask from "./Component/NewTask/NewTask";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="all_task">
        <NewTask />
        <NewTask />
        <NewTask />
        <NewTask />
        <NewTask />
        <NewTask />
        <NewTask />
        <NewTask />
        <NewTask />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
