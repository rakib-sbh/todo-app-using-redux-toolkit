import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialTodos = [
  {
    id: nanoid(),
    text: "Learn React",
    completed: false,
  },
  {
    id: nanoid(),
    text: "Learn Redux",
    completed: true,
  },
  {
    id: nanoid(),
    text: "Learn Redux Toolkit",
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    inputBox: {
      text: "",
      buttonText: "add",
      id: null,
    },
    todos: initialTodos,
  },
  reducers: {
    showAllTodo: (state, action) => state,
    changeInputBox: (state, action) => {
      state.inputBox.text = action.payload;
    },
    clearInputBox: (state, action) => {
      state.inputBox = {
        text: "",
        buttonText: "add",
        id: null,
      };
    },
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: state.inputBox.text,
        completed: false,
      });
    },
    toggleStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return { ...todo };
        }
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    placeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          state.inputBox.text = todo.text;
          state.inputBox.buttonText = "update";
          state.inputBox.id = todo.id;
        }

        return todo;
      });
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === state.inputBox.id) {
          return {
            ...todo,
            text: state.inputBox.text,
          };
        } else {
          return {
            ...todo,
          };
        }
      });
    },
  },
});

export const {
  showAllTodos,
  changeInputBox,
  addTodo,
  clearInputBox,
  toggleStatus,
  deleteTodo,
  placeTodo,
  editTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
