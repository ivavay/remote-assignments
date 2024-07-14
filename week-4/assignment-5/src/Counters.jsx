import CounterButton from "./CounterButton";
import AddAllButton from "./AddAllButton";
import { useState, useEffect } from "react";

export default function Counters(props) {
  const [score, setScore] = useState(props.score);
  // useEffect(()=> {
  //   setScore(props.score + 1)
  // }, [props])
 
  function handleAddOne(key, delta) {
    setScore(props.score+1);
  }
  console.log(score)
  function handleStateClick() {
    setSharedState(sharedState + 1);
    console.log("Clicked share state");
    console.log(sharedState);
  }
  return (
    <div>
      <AddAllButton handleStateClick={handleStateClick} />

      <CounterButton addOne={handleAddOne} score={props.score} id="1" />
      <CounterButton addOne={handleAddOne} score={props.score} id="2" />
      <CounterButton addOne={handleAddOne} score={props.score} id="3" />
    </div>
  );
}
