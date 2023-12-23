import React, { useRef } from "react";
import TodoItem from "./TodoItem";
import Card from "./TodoCard";

const TodoList = ({ todos, onDelete, onToggleComplete, isCardModeActive }) => {
  const ref = useRef(null);

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1; // Sort completed todos after active todos
    }
    // Sort by completion time for completed todos and creation time for active todos
    return a.completed
      ? b.completedAt - a.completedAt // Completed todos (most recent on top)
      : b.createdAt - a.createdAt; // Active todos (most recent on top)
  });

  return (
    <>
      {isCardModeActive ? (
        // Render todos in card mode
        <div className="w-full max-w-full px-10 mt-4 max-h-[520px] overflow-y-auto">
          {sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      ) : (
        // Render todos in list mode
        <div
          ref={ref}
          className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap p-5 gap-2 overflow-y-auto"
        >
          {sortedTodos.map((todo) => (
            <Card
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
              reference={ref}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
