import { useState } from "react";
import "./App.css";

function App() {
  //0 olarak verdiğimiz şey count state'inin initial state'i yani count'un varsayılan (ilk) değeri
  //count: state'in ismi->state
  //setCount: state'in değerini değiştirme fonksiyonu-> setState
  const [count, setCount] = useState(0); //hook
  const onClickButton = () => {
    // alert("Butona bastım!!");
    //setCount(count + 10);--> bu yazım doğru değil asenkron problemi ortaya çıkar sounuç olarak yanlış seçim
    setCount((prevState) => {
      return prevState + 10;
    }); // asenkron problemini bu şekilde çözeriz. doğru seçimdir
  };
  //count = 10
  //setCount => count = 20
  //setCount => count = count + 10

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <button onClick={onClickButton}>Click</button>
        </p>
      </div>
    </>
  );
}

export default App;
