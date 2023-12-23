import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <main className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </main>
  );
};

export default App;
