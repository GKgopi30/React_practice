import React from "react";
import { useState } from "react";

function PracticeOne() {
  const [count, setCount] = useState(0)

  const IncreseCount = () => {
    setCount(count + 1);
  }
  const DecreesCount = () => {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={IncreseCount}>+</button>
      <span>{count}</span>
      <button onClick={DecreesCount}>-</button>
    </>
  );
}

export default PracticeOne;