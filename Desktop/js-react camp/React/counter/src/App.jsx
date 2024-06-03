import "./App.css";
import Counter from "./components/Counter";
function App() {
  const increment = (message) => {
    console.log(message);
  };
  return (
    <>
      <h1>Zikirmatik</h1>
      <Counter title="Fatiha" count={10} />
      <Counter title="Kelime-i Tevhid" />
      <Counter title="İhlas" />
      <Counter title="Ayetel Kürsi" increment={increment} />
    </>
  );
}

export default App;
