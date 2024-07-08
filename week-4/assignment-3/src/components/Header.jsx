import { useState } from "react";

export default function Header() {
  // Chnage text upon clicking
  const [text, setText] = useState("Welcome Message");
  function handleClick() {
    setText("Have a Good Day");
  }
  return (
    <>
      <header>
        <h1 onClick={handleClick}>{text}</h1>
      </header>
    </>
  );
}
