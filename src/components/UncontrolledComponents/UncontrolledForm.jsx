import React from "react";

const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placholder="Your Name" ref={nameInput} />
      <input type="number" name="age" placholder="Your Age" ref={ageInput} />
      <input type="submit">Submit</input>
    </form>
  );
};

export default UncontrolledForm;
