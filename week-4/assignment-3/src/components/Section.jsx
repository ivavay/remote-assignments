import Card from "./Card";
import Button from "./Button";
import { useState, useRef } from "react";

export default function Section() {
  const row2 = useRef(null);

  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(true);
    console.log("clicked");
    row2.current.style.display = "flex";
  }
  return (
    <section>
      <h2>Section Title</h2>
      <div className="row">
        <Card number="1" />
        <Card number="2" />
        <Card number="3" />
        <Card number="4" />
      </div>
      <Button click={handleClick} />
      <div ref={row2} className="row-2">
        <Card number="1" />
        <Card number="2" />
        <Card number="3" />
        <Card number="4" />
      </div>
    </section>
  );
}
