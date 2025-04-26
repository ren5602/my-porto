import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* navbar */}
      <div className="flex justify-around font-bold sticky top-0 text-black bg-[rgba(255,255,255,0.5)]">
        <div className="flex justify-start px-5 py-5 flex-col gap-10">
          <p>Renhwa</p>
        </div>
        <div className="flex justify-end pr-10 py-5 flex-row gap-10 w-2/3">
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
        </div>
      </div>
      {/* Greetings */}
      <div className="flex flex-col justify-center items-center h-screen font-bold text-7xl">
        <p>
          Hello,
        </p>
        <p>I'm Renhwa!</p>
      </div>
    </>
  );
}

export default App;
