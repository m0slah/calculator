import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");

  const changeHandler = (event) => {
    setResult(result.concat(event.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container bg-black">
      <div className="row">
        <div className="input">
          {result}
        </div>
      </div>
      <div className="row ">
        <button className="button clear bg-lightGrey" onClick={clear}>
          Clear
        </button>
        <button
          className="button bg-lightGrey"
          onClick={backSpace}
        >
          C
        </button>
        <button name="/" className="button bt-orenge" onClick={changeHandler}>
          / 
        </button>
      </div>
      <div className="row ">
        <button name="7" className="button" onClick={changeHandler}>
          7
        </button>
        <button name="8" className="button" onClick={changeHandler}>
          8
        </button>
        <button name="9" className="button" onClick={changeHandler}>
          9
        </button>
        <button name="*" className="button bt-orenge" onClick={changeHandler}>
          X
        </button>
      </div>
      <div className="row">
        <button name="4" className="button" onClick={changeHandler}>
          4
        </button>
        <button name="5" className="button" onClick={changeHandler}>
          5
        </button>
        <button name="6" className="button" onClick={changeHandler}>
          6
        </button>
        <button name="-" className="button bt-orenge" onClick={changeHandler}>
          -
        </button>
      </div>
      <div className="row">
        <button name="1" className="button" onClick={changeHandler}>
          1
        </button>
        <button name="2" className="button" onClick={changeHandler}>
          2
        </button>
        <button name="3" className="button" onClick={changeHandler}>
          3
        </button>
        <button name="+" className="button bt-orenge" onClick={changeHandler}>
          +
        </button>
      </div>
      <div className="row">
        <button name="0" className="button zero" onClick={changeHandler}>
          0
        </button>
        <button name="." className="button" onClick={changeHandler}>
          .
        </button>
        <button name="=" className="button bt-orenge" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
