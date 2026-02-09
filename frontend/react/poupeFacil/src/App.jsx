import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello World");

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">{message}</h1>
      <button
        className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto mt-4"
        onClick={() => setMessage("Hello React!")}
      >
        Click me
      </button>
    </>
  );
}

export default App;
