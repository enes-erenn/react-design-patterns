import React from "react";

const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>Name: {name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor} years</p>
      <h3>Hobbies:</h3>
      {hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
      ))}
    </>
  ) : (
    <p>loading</p>
  );
};

export default UserInfo;
