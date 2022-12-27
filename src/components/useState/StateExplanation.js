import React, { useState } from "react";

const StateExplanation = () => {
  const [count, setCount] = useState(0);
  return (
    <center>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </center>
  );
};

export default StateExplanation;
