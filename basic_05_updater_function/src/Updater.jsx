import React, { useState } from "react";

const Updater = () => {
  const [num, setNum] = useState(0);

  const handleIncrement = () => {
    setNum((n) => n + 1);
    setNum((n) => n + 1);
    setNum((n) => n + 1);
  };

  const handleDecrement = () => {
    setNum((n) => n - 1);
    setNum((n) => n - 1);
    setNum((n) => n - 1);
  };

  const handleReset = () => {
    setNum(0);
  };

  return (
    <div>
      <h1>{num}</h1>
      <br />
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Updater;
