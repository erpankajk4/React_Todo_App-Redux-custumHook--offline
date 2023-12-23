import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  setTodosFromStorage,
  clearTodos,
} from "../redux/todoSlice";
import useLocalStorage from "../customHooks/useLocalStorage";
import TodoList from "./TodoList";
import InputBar from "./InputBar";
import { motion } from "framer-motion";

const TodoApp = ({ isCardModeActive }) => {
  // Custom hook to manage local storage for todos
  const [localTodos, setLocalTodos, clearLocalTodos] = useLocalStorage( "todos", [] );

    // Access the Redux store dispatch and selected state
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);

  // Effect to synchronize local storage with Redux state on initial load
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos) {
      dispatch(setTodosFromStorage(localTodos));
      setLocalTodos(localTodos);
    }
  }, [dispatch, , setLocalTodos]);

  // Function to handle adding a new todo
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    dispatch(addTodo(newTodo));
    setLocalTodos([...localTodos, newTodo]);
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
    const updatedLocalTodos = localTodos.filter((todo) => todo.id !== id);
    setLocalTodos(updatedLocalTodos);
  };

  // Function to handle toggling a todo's completion status
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id }));
    const updatedLocalTodos = localTodos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
            completedAt: todo.completed ? undefined : Date.now(),
          }
        : todo
    );
    setLocalTodos(updatedLocalTodos);
  };

  // Function to handle resetting todos
  const handleResetTodos = () => {
    dispatch(clearTodos());
    clearLocalTodos();
  };

  return (
    // Framer Motion wrapper for animation
    <motion.div
      className={`relative flex flex-col items-center justify-center ${
        isCardModeActive ? "lg:w-[50%]" : ""
      }  w-[80%]`}
    >
      {isCardModeActive ? (
        <InputBar
          onSubmit={handleAddTodo}
          handleResetTodos={handleResetTodos}
        />
      ) : (
        ""
      )}
      <TodoList
        todos={todoList}
        onDelete={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        isCardModeActive={isCardModeActive}
      />
    </motion.div>
  );
};

export default TodoApp;
