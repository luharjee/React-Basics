import React, { useState } from "react";

const Change = () => {
  const [name, setName] = useState("Kamal");
  const [num, setNum] = useState(0);
  const [comment, setComment] = useState("I am not happy here");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeNum = (event) => {
    setNum(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleChangeName} />
      <h3>Name : {name}</h3>

      <br />

      <input value={num} onChange={handleChangeNum} type="number" />
      <h3>Num : {num}</h3>

      <br />

      <textarea
        name="Write here"
        id="area"
        placeholder="Please write your suggestion"
        onChange={handleCommentChange}
      ></textarea>
      <p>Comment : {comment}</p>

      <br />

      <select
        name="select"
        id="we"
        value={payment}
        onChange={handlePaymentChange}
      >
        <option value="">Select Payment Mode</option>
        <option value="google pay">Google Pay</option>
        <option value="visa">VISA</option>
        <option value="apple pay">Apple Pay</option>
        <option value="american express">American Express</option>
      </select>

      <h2>Payment Mode : {payment}</h2>

      <br />

      <input
        type="radio"
        value="pick up"
        checked={shipping === "pick up"}
        onChange={handleShippingChange}
      />
      <label
        htmlFor="
      "
      >
        Pick Up
      </label>
      <br />
      <br />
      <input
        type="radio"
        value="delivery"
        checked={shipping === "delivery"}
        onChange={handleShippingChange}
      />

      <label
        htmlFor="
      "
      >
        Delivery
      </label>

      <br />
      <hr />

      <h1>Shipping : {shipping}</h1>
      <br />
      <hr />
    </>
  );
};

export default Change;
