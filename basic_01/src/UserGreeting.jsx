import React from "react";

const UserGreeting = (props) => {
  return props.isLoggedIn ? (
    <h2>Welcome {props.username}</h2>
  ) : (
    <h2>Please Log In</h2>
  );
};

export default UserGreeting;
