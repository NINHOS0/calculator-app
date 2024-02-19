import Key from "./Key";
import LongKey from "./LongKey";

const Keyboard = ({clickHandler}) => {
  return (
    <div className="bg-keyboard rounded-lg p-6 grid grid-cols-4 gap-3.5 sm:gap-5 transition-all">
      <Key clickHandler={clickHandler}>7</Key>
      <Key clickHandler={clickHandler}>8</Key>
      <Key clickHandler={clickHandler}>9</Key>
      <Key clickHandler={clickHandler}>del</Key>
      <Key clickHandler={clickHandler}>4</Key>
      <Key clickHandler={clickHandler}>5</Key>
      <Key clickHandler={clickHandler}>6</Key>
      <Key clickHandler={clickHandler}>+</Key>
      <Key clickHandler={clickHandler}>1</Key>
      <Key clickHandler={clickHandler}>2</Key>
      <Key clickHandler={clickHandler}>3</Key>
      <Key clickHandler={clickHandler}>-</Key>
      <Key clickHandler={clickHandler}>.</Key>
      <Key clickHandler={clickHandler}>0</Key>
      <Key clickHandler={clickHandler}>/</Key>
      <Key clickHandler={clickHandler}>x</Key>
      <LongKey clickHandler={clickHandler}>reset</LongKey>
      <LongKey clickHandler={clickHandler}>=</LongKey>
    </div>
  );
};

export default Keyboard;
