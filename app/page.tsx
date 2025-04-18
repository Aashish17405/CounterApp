"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  }

  const decrement = () => {
    setCount((prev) => prev - 1);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <h1>Counter App</h1>
      <button onClick={decrement} className="border border-white rounded-full p-3 cursor-pointer">Decrement</button>
      <div className="p-3">{count}</div>
      <button onClick={increment} className="border border-white rounded-full p-3 cursor-pointer">Increment</button>
    </div>
  );
}
