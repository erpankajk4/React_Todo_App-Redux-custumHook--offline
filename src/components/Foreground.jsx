import React, { useRef, useState } from "react";
import TodoApp from "./TodoApp";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { motion } from "framer-motion";

const Foreground = () => {
  const ref = useRef(null);
  const [isCardModeActive, setisCardModeActive] = useState(true);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex justify-center gap-10 flex-wrap p-5 "
    >
      <TodoApp isCardModeActive={isCardModeActive} />
      <motion.button
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="absolute rounded-full h-20 w-20 bg-red-800 text-center flex flex-col justify-center items-center text-white top-5 right-5 z-[5]"
        onClick={()=>setisCardModeActive(!isCardModeActive)}
      >
        <span className="text-lg ">
          <FaRegFaceSmileWink />
        </span>
        <span>Click me!</span>
      </motion.button>
    </div>
  );
};

export default Foreground;
