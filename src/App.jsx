import { useState } from "react";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
import Header from "./components/Header";

const numbers = "0123456789";
const operations = "x/+-";

function App() {
  const [display, setDisplay] = useState(["0"]);

  function clickHandler(input) {
    const digit = input.trim().toLowerCase();
    const lastDisplay = display[display.length - 1];

    switch (digit) {
      case "-":
      case "+":
      case "/":
      case "x":
        if (operations.includes(lastDisplay)) setDisplay([...display.slice(0, display.length - 1), digit]);
        else setDisplay([...display, digit]);
        break;

      case "del":
        if (display.length === 1 && lastDisplay.length === 1) setDisplay(["0"]);
        else if (lastDisplay.length >= 2)
          setDisplay([...display.slice(0, display.length - 1), display[display.length - 1].slice(0, lastDisplay.length - 1)]);
        else setDisplay(display.slice(0, display.length - 1));
        break;

      case "reset":
        setDisplay(["0"]);
        break;

      case "=":
        calc();
        break;

      case ".":
        if (numbers.includes(lastDisplay[lastDisplay.length - 1]) && !lastDisplay.includes("."))
          setDisplay([...display.slice(0, display.length - 1), display[display.length - 1] + digit]);
        break;

      default:
        if (lastDisplay.length === 1 && lastDisplay === "0") setDisplay([digit]);
        else if (!isNaN(+lastDisplay)) setDisplay([...display.slice(0, display.length - 1), display[display.length - 1] + digit]);
        else setDisplay([...display, digit]);
        break;
    }
  }

  function calc() {
    if (operations.includes(display[display.length - 1])) display.pop();
    for (let i = 0; i < display.filter((v) => operations.includes(v)).length; i++) {
      const [opIndex, opValue] = find();
      const prev = opIndex === 1 ? [] : display.slice(0, opIndex - 1);
      const next = display.slice(opIndex + 2, display.length);

      if (opValue === "x") {
        const op = +display[opIndex - 1] * +display[opIndex + 1];
        setDisplay([...prev, op.toFixed(3).replace(/\.?0*$/, ""), ...next]);
      } else if (opValue === "/") {
        const op = +display[opIndex - 1] / +display[opIndex + 1];
        setDisplay([...prev, op.toFixed(3).replace(/\.?0*$/, ""), ...next]);
        if (isNaN(op)) setDisplay(["0"]);
      } else if (opValue === "+") {
        const op = +display[opIndex - 1] + +display[opIndex + 1];
        setDisplay([...prev, op.toFixed(3).replace(/\.?0*$/, ""), ...next]);
      } else if (opValue === "-") {
        const op = +display[opIndex - 1] - +display[opIndex + 1];
        setDisplay([...prev, op.toFixed(3).replace(/\.?0*$/, ""), ...next]);
      }
    }
  }

  function find() {
    let opIndex = display.findIndex((v, i) => v === "x" || (v === "/" && i));
    if (opIndex === -1) opIndex = display.findIndex((v, i) => v === "+" || (v === "-" && i));

    let opValue = display.find((v) => v === "x" || (v === "/" && v));
    if (!opValue) opValue = display.find((v) => v === "+" || (v === "-" && v));

    return [opIndex, opValue];
  }

  return (
    <main className="flex flex-col gap-6 text-prim p-6 w-full max-w-[520px]">
      <Header />
      <Display display={display} />
      <Keyboard clickHandler={clickHandler} />
    </main>
  );
}

export default App;
