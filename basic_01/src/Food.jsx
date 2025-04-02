const Food = () => {
  const food1 = "Ornage";
  const food2 = "Banana";

  return (
    <ol>
      <li>Apple</li>
      <li>{food1.toUpperCase()}</li>
      <li>{food2.toUpperCase()}</li>
    </ol>
  );
};

export default Food;
