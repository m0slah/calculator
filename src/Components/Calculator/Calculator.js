import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc, value).toString());
    }
  };

  const calculate = (event) => [setCalc(eval(calc).toString())];

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.eval();
    setCalc(value);
  };

  return (
    <div className="container bg-red">
      <div className="row">
        <div className="input">
          {result ? <span>({result})</span> : ""} &nbsp; {calc || "0"}
        </div>
      </div>
      <div className="row ">
        <button className="button bg-lightGrey" onClick={deleteLast}>
          AC
        </button>
        <button className="button bg-lightGrey">+/-</button>
        <button
          className="button bg-lightGrey"
          onClick={() => {
            updateCalc("%");
          }}
        >
          %
        </button>
        <button
          className="button bt-orenge"
          onClick={() => {
            updateCalc("/");
          }}
        >
          /
        </button>
      </div>
      <div className="row ">
        <button
          className="button"
          onClick={() => {
            updateCalc("7");
          }}
        >
          7
        </button>
        <button
          className="button"
          onClick={() => {
            updateCalc("8");
          }}
        >
          8
        </button>
        <button
          className="button"
          onClick={() => {
            updateCalc("9");
          }}
        >
          9
        </button>
        <button
          className="button bt-orenge"
          onClick={() => {
            updateCalc("*");
          }}
        >
          X
        </button>
      </div>
      <div className="row">
        <button
          className="button"
          onClick={() => {
            updateCalc("4");
          }}
        >
          4
        </button>
        <button
          className="button"
          onClick={() => {
            updateCalc("5");
          }}
        >
          5
        </button>
        <button
          className="button"
          onClick={() => {
            updateCalc("6");
          }}
        >
          6
        </button>
        <button
          className="button bt-orenge"
          onClick={() => {
            updateCalc("-");
          }}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          className="button"
          onClick={() => {
            updateCalc("1");
          }}
        >
          1
        </button>
        <button
          className="button"
          onClick={() => {
            updateCalc("2");
          }}
        >
          2
        </button>
        <button
          className="button"
          onClick={() => {
            updateCalc("3");
          }}
        >
          3
        </button>
        <button
          className="button bt-orenge"
          onClick={() => {
            updateCalc("+");
          }}
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          className="button zero"
          onClick={() => {
            updateCalc("0");
          }}
        >
          0
        </button>
        <button
          className="button"
          onClick={() => {
            updateCalc(".");
          }}
        >
          .
        </button>
        <button className="button bt-orenge" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
