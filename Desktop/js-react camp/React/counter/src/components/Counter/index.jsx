import { useState } from "react";
import "./index.css";

const Counter = ({ title, count: countProp, increment: incrementProp }) => {
  const [count, setCount] = useState(countProp || 0);
  console.log(title);
  const increment = () => {
    setCount((prevState) => prevState + 1);
    // if (incrementProp) {
    //   incrementProp("sayı arttı");
    // }
    incrementProp?.("sayı arttı");
  };
  const decrement = () => {
    console.log("decrement");
    if (count - 1 >= 0) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="counter">
      <p>{title}</p>

      <div className="counter-buttons">
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
