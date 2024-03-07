/** @format */
import React from "react";
import { generateNumbers } from "./generateNumbers.js";
import Number from "./Number.js";
export default function Housy() {
  const numbers = generateNumbers();
  return (
    <div>
      <div className="box">
        {numbers.map((num, i) => (
          <Number number={num} key={num} index={i} />
        ))}
      </div>
    </div>
  );
}
