import React from "react";
import NavBar from "./NavBar";

const background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <NavBar />
      <h1 className="absolute text-[13vw] font-semibold text-zinc-600 leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        To-Doist
      </h1>
    </div>
  );
};

export default background;
