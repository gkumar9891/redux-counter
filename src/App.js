import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/actions";

export default function App() {
  const count = useSelector((state) => state.changeTheNumber);
  const changeCount = useDispatch();

  console.log(changeCount);

  return (
    <div className="App">
      <div className="counter-container">
        <div className="content">
          <h2>Increment/Decrement Counter</h2>
          <p>Using React and Redux</p>
          <button onClick={() => changeCount(decrement(5))}>&#8722;</button>
          <input type="number" value={count} readOnly />
          <button onClick={() => changeCount(increment(5))}>&#43;</button>
        </div>
      </div>
    </div>
  );
}
