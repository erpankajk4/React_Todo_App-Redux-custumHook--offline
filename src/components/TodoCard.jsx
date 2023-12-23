import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import {dateConvert} from "../assets/js/dateFinder"

const Card = ({ id, text, completed, onDelete, onToggleComplete, reference }) => {
  const formattedDate = dateConvert(id);

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white p-8 py-10 overflow-hidden flex-shrink-0 m-1"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold overflow-hidden">{text}</p>

      <footer className="footer absolute left-0 bottom-0 w-full">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{formattedDate}</h5>
          {/* Delete button  */}
          <span
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center"
            onClick={() => onDelete(id)}
          >
            <IoCloseSharp />
          </span>
        </div>
        {/* ToDo complete button  */}
        <div onClick={() => onToggleComplete(id)}
          className="tag w-full py-4 flex item-center justify-center"
          style={{
            backgroundColor: `${completed ? "green" : "red"}`,
          }}
        >
          <h3 className="text-sm font-semibold">
            {completed ? "Completed" : "Complete"}
          </h3>
        </div>
      </footer>
    </motion.div>
  );
};

export default Card;
