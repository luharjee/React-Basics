const Student = (props) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "Yes" : "No"}</p>
      <hr />
    </div>
  );
};

Student.defaultProps = {
  name: "Guest",
  age: 22,
  isStudent: "no",
};

export default Student;
