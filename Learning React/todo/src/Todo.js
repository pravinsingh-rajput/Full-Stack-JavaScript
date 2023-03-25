import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="list__items">
      <button
        className="remove"
        onClick={() => {
          return props.click(props.id);
        }}
      >
        x
      </button>
      <li>{props.text}</li>
    </div>
  );
};

export default Todo;
