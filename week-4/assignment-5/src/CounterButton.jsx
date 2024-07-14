import { useState } from "react";

export default function CounterButton(props) {
  const key = props.id
  return (
    <>
      <div id={key} className="counter" onClick={() => props.addOne(key, -1)}>
        <span className="plus-box">+1</span>
        <span>{props.score}</span>
      </div>
    </>
  );
}
