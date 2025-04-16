import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => dispatch(increment())}>increment ( +1 )</button>
      <button onClick={() => dispatch(decrement())}>decrement ( -1 )</button>
    </div>
  );
}

export default App;
