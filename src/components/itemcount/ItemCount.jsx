import React, { useState } from "react";
import Button from "../button/Button.jsx";

export default function ItemCount() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [stock, setStock] = useState(10);

  return (
    <>
      <h1>contador: {count}</h1>

      <Button
        text="Sumar"
        click={() => setCount(count + 1)}
        // click={() => setStock(stock - 1)}
      ></Button>
      <Button text="restar" click={() => setCount(count - 1)}></Button>
    </>
  );
}
