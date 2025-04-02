import React, { useState } from "react";

const MyName = () => {
  const [name, setName] = useState("Luhar");
  const [age, setAge] = useState(24);
  const [isEmployed, setIsEmployed] = useState(false);
  const changeName = () => {
    setName("Kali");
  };

  const changeAge = () => {
    setAge(age + 1);
  };

  const checkEmp = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>Age : {age}</h1>
      <button onClick={changeAge}>Age Badhao</button>

      <h1>Employee: {isEmployed ? "Yes" : "No"}</h1>
      <button onClick={checkEmp}>Check</button>
    </div>
  );
};

export default MyName;
