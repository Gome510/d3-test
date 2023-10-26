import React, { useState } from "react";
import { useInterval } from "@react-hooks-library/core";

function Circles() {
  const [dataset, setDataset] = useState(generateDataset());

  function generateDataset() {
    return Array(10)
      .fill(0)
      .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10]);
  }

  useInterval(() => {
    const newDataset = generateDataset();
    setDataset(newDataset);
  }, 2000);

  return (
    <svg viewBox="0 0 100 50">
      {dataset.map(([x, y], i) => (
        <circle cx={x} cy={y} r="3" fill="white" />
      ))}
    </svg>
  );
}

export default Circles;
