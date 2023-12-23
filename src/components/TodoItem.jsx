import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { dateConvert } from "../assets/js/dateFinder";

const TodoItem = ({ id, text, completed, onDelete, onToggleComplete }) => {
  const formattedDate = dateConvert(id);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      className={`flex items-center justify-between  mr-1 bg-zinc-200 shadow-md rounded-md mb-4 text-zinc-700 ${
        completed ? "opacity-50" : "opacity-90"
      }`}
    >
      <div className="flex flex-col w-[70%] p-4 overflow-hidden" onClick={() => onToggleComplete(id)}>
        <span className="text-lg ">{text}</span>
        <span className="text-[14px] ">Created At : {formattedDate}</span>
      </div>

      <div className="flex">
        <button
          className={`mx-2 font-semibold ${
            completed ? "text-red-700" : "text-blue-700"
          }`}
          onClick={() => onToggleComplete(id)}
        >
          {completed ? "Completed" : "Complete"}
        </button>
        <button
          className="text-2xl text-red-700 pr-3"
          onClick={() => onDelete(id)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </motion.div>
  );
};

export default TodoItem;
