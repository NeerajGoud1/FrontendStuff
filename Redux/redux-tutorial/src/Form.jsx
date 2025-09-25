import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

export default function Form() {
  const [task, setTask] = useState("");

  let dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
    dispatch(addTodo(task)); //triggers state change and task is accesed at payload at the todoSilce
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(evt) => setTask(evt.target.value)}
          value={task}
        ></input>
        <br />
        <br />
        <button>Add Task</button>
      </form>
    </>
  );
}
