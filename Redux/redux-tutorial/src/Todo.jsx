import { useSelector } from "react-redux";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./features/todo/todoSlice";
import { markAsDone } from "./features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id)); //this id will be stored at action.payload
  };
  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <Form />
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone ? { textDecorationLine: "line-through" } : null
              }
            >
              {todo.task}
            </span>{" "}
            &nbsp;&nbsp;
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleMarkAsDone(todo.id)}>
              MarkAsDone
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
