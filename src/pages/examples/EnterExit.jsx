import { useInterval } from "@react-hooks-library/core";
import React, { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

function EnterExit() {
  const [visibleCircles, setVisibleCircles] = useState(generateRandomCircles());
  const [allCircles, setAllCircles] = useState(generateAllCircles());

  function generateRandomCircles() {
    let circles = [];
    for (let i = 0; i < 6; i++) {
      if (Math.round(Math.random()) == 1) {
        circles.push(i);
      }
    }
    return circles;
  }

  function generateAllCircles() {
    let circles = [];
    for (let i = 0; i < 6; i++) {
      circles.push(i);
    }
    return circles;
  }

  useInterval(() => setVisibleCircles(generateRandomCircles()), 2000);

  return (
    <svg viewBox="0 0 100 20">
      {allCircles.map((d) => (
        <Circle key={d} index={d} isShowing={visibleCircles.includes(d)} />
      ))}
    </svg>
  );
}

export default EnterExit;

function Circle({ index, isShowing }) {
  const wasShowing = useRef(false);

  useEffect(() => {
    wasShowing.current = isShowing;
  }, [isShowing]);

  const style = useSpring({
    config: {
      duration: 1200,
    },
    r: isShowing ? 6 : 0,
    opacity: isShowing ? 1 : 0,
  });

  return (
    <animated.circle
      {...style}
      cx={index * 15 + 10}
      cy={10}
      fill={
        !isShowing
          ? "tomato"
          : !wasShowing.current
          ? "cornflowerblue"
          : "lightgrey"
      }
    />
  );
}
