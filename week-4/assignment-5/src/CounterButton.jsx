import { useState } from "react";

export default function CounterButton({ count, onClick, sharedState }) {
  return (
    <>
      <div className="counter" onClick={onClick}>
        <span className="plus-box">+1</span>
        <span>{count}</span>
        <span>{sharedState}</span>
      </div>
    </>
  );
}
