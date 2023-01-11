import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
//useEffect(인자1 한번만 실행하고픈함수, ??)
function App() {
  const [counter, setValue] = useState(0);

  const OnClick = () => setValue((prev) => prev + 1);
  console.log("all time call api"); //렌더링중 api를 매번 불러오지 않도록 제어하고 싶을때

  useEffect(() => {
    console.log("call api once");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={OnClick}>Clickme</button>
    </div>
  );
}

export default App;
