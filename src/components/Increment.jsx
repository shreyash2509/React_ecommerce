import React, { useState } from "react";

const Increment = ({ count, setCount }) => {
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  }

  return (
    <div className="increment card-title flex w-20 justify-around items-center">
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Increment;
