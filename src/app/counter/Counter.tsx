"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count: {count}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        increase
      </button>
      <button
        className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count - 1)}
      >
        decrease
      </button>
    </div>
  );
}

export default Counter;
