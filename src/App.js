import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <h2 data-testid="counter">{counter}</h2>
        <button
          data-testid="minus-button"
          onClick={() => setCounter((prev) => prev - 1)}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCounter((prev) => prev + 1)}
          disabled={disabled}
        >
          +
        </button>
      </div>
      <button
        data-testid="on/off-button"
        style={{ backgroundColor: "blue" }}
        onClick={() => setDisabled((prev) => !prev)}
      >
        ON/OFF
      </button>
    </div>
  );
}

export default App;
