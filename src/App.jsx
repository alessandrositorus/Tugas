import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, isCount] = useState(0);

  useEffect(() => {
    alert("aku suka game free fire");
  }, []);

  console.log("Game Free fire nomor 1 di playstore");

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => isCount(count + 1)}>Pencet</button>
    </>
  );
}

export default App;
