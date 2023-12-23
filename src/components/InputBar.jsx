import React, { useState } from 'react';

const InputBar = ({ onSubmit, handleResetTodos }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full mx-auto mt-8">
      <div className="flex items-center border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-zinc-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* ADD ToDo Button  */}
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add
        </button>

        {/* RESET Button  */}
        <button
        className="flex-shrink-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3"
        onClick={handleResetTodos}
      >
        RESET
      </button>
      </div>
    </form>
  );
};

export default InputBar;
