import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  //to initialize initial values for the states stores in variables
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  //createSice fun will return a slice and we are exporting to use in other components

  name: "todo", //it is always recommended to use name as given to feature i.e todo
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        //adding a todo into todos which is defined as state var and we can access it via state parameter in reducer's fun
        id: nanoid(),
        task: action.payload,// what ever you send from usedispatch form the components can be accessed via payload
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;  // to directly import and use over components to update state
export default todoSlice.reducer; //to menction the reducer at store
