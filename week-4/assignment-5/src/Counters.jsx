import CounterButton from "./CounterButton";
import AddAllButton from "./AddAllButton";
import { useState } from "react";

export default function Counters({ handleClickOne }) {
  const [sharedState, setSharedState] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  function handleClickOne(counter) {
    
    // setCount(count+1);
    // console.log("clicked one!");
    // console.log(count)
    if (counter == 'count1'){
        setCount1(count1+1)
        console.log('clicked count1')
    } else if (counter == 'count2'){
        setCount2(count2+1)
        console.log('clicked count2')
    } else if (counter == 'count3'){
        setCount3(count3+1)
  }
}
  function handleStateClick() {
    setSharedState(sharedState + 1);
    console.log("Clicked share state");
    console.log(sharedState);
  }
  return (
    <div>
      <AddAllButton handleStateClick={handleStateClick} />

      <CounterButton
        count={count1}
        setCount={setCount1}
        setShareState={setSharedState}
        sharedState={sharedState}
        onClick = {() => handleClickOne('count1')}
      />
      <CounterButton
        count={count2}
        setCount={setCount2}
        setShareState={setSharedState}
        sharedState={sharedState}
        onClick = {() => handleClickOne('count2')}
      />
      <CounterButton
        count={count3}
        setCount={setCount3}
        setShareState={setSharedState}
        sharedState={sharedState}
        onClick = {() => handleClickOne('count3')}
      />
    </div>
  );
}
