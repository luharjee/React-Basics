import React, { useState } from "react";

const UpdateObject = () => {
  const [car, setCar] = useState({
    year: 2025,
    model: "Mustang",
    brand: "Ford",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };

  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  const handleBrandChange = (event) => {
    setCar((c) => ({ ...c, brand: event.target.value }));
  };

  return (
    <div>
      <h1>
        Your favourate car is : {car.year} {car.model} {car.brand}
      </h1>
      <br />
      <br />
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
      <br />
      <input type="text" value={car.brand} onChange={handleBrandChange} />
    </div>
  );
};

export default UpdateObject;
