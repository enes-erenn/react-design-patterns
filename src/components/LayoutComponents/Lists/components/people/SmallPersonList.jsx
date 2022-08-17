import React from "react";

const SmallPersonList = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
};

export default SmallPersonList;
