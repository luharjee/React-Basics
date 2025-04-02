import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Btn from "./Btn.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Rahul from "./Rahul.jsx";

const App = () => {
  const fruits = [
    { id: 1, name: "Apple", calories: 123 },
    { id: 2, name: "Orange", calories: 111 },
    { id: 3, name: "Pineapple", calories: 100 },
    { id: 4, name: "Watermelon", calories: 93 },
    { id: 5, name: "Papaya", calories: 99 },
  ];

  const vegetables = [
    { id: 6, name: "Potato", calories: 123 },
    { id: 7, name: "Tomato", calories: 111 },
    { id: 8, name: "Carrot", calories: 100 },
    { id: 9, name: "Cauli", calories: 93 },
    { id: 10, name: "Peas", calories: 99 },
  ];

  return (
    <>
      <MyComponent />
      {/* <ProfilePicture /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Rahul />
      <br />
      <br />
      <br />
      <Btn />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />

      <Header />

      <Food />

      <Footer />
      <hr />
      <br />
      <Card />
      <Card />
      <Card />
      <Button />

      <Student name="Rahul" age={22} isStudent={false} />

      <Student name="Kali" age={21} isStudent={true} />
      <Student name="Kali" age={21} isStudent={true} />
      <Student name="Kali" age={21} isStudent={true} />
      <Student name="Kali" age={21} isStudent={true} />
      <Student name="Kali" age={21} isStudent={true} />
      <Student />
      {/* <UserGreeting isLoggedIn={true} username="Rahul" /> */}
    </>
  );
};

export default App;
