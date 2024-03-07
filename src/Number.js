/** @format */
import React, { useState } from "react";
export default function Number({ number, index }) {
  const [finish, setFinish] = useState(false);
  return (
    <div
      onClick={() => setFinish((finish) => !finish)}
      className={`number${index >= 5 && index <= 9 ? " second" : ""} ${
        finish ? " click" : ""
      }`}
    >
      {number}
    </div>
  );
}
