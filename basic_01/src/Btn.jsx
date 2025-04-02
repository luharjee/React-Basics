import React from "react";
import Button from "./Button";

const Btn = () => {
  const handleClick = (e) => {
    e.target.textContent = "OOUCH!!";
  };

  return (
    <button onDoubleClick={(e) => handleClick(e)}>Click Here!! smile</button>
  );
};

export default Btn;
