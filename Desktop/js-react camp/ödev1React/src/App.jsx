import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount((prevState) => {
      return prevState + 3;
    });
  };

  const onClick = () => {
    setCount((prevState) => {
      return prevState - 3;
    });
  };
  return (
    <>
      <h2>3 er 3 er Artma veya Azaltma Button</h2>
      <div>
        <button>Total : {count}</button>
      </div>

      <button onClick={onClickButton}>3 : Arttirma</button>
      <button onClick={onClick}>3 : Azaltma</button>
    </>
  );
}

export default App;
