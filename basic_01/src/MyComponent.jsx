import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Rahul");
  const updateName = () => {
    setName("Kali");
  };

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName}>set-name</button>
    </div>
  );
};

export default MyComponent;
