import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="list__items">
      <i class="fa-solid fa-xmark"></i>
      <button className="remove"> x </button>
      <li>{props.text}</li>
    </div>
  );
};

export default Todo;
