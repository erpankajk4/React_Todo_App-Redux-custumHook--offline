import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {
    // Reducer function to add a new todo to the list
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    // Reducer function to delete a todo from the list
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    // Reducer function to toggle the completion status of a todo
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const todoToToggle = state.todoList.find((todo) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
        if (todoToToggle.completed) {
          todoToToggle.completedAt = Date.now();
        } else {
          delete todoToToggle.completedAt;
        }
      }
    },
    // Reducer function to set todos retrieved from local storage
    setTodosFromStorage: (state, action) => {
      state.todoList = action.payload;
    },
    // Reducer function to clear all todos
    clearTodos: (state) => {
      state.todoList = [];
    },
  },
});

// Extracting action creators from the todoSlice
export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  setTodosFromStorage,
  clearTodos,
} = todoSlice.actions;

// Exporting the reducer function from the slice
export default todoSlice.reducer;
