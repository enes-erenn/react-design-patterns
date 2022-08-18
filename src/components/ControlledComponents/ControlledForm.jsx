import React, { useEffect, useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  // Validating the Name Input
  useEffect(() => {
    if (name.trim().length < 2) {
      console.log("Please enter a name");
    }
  }, [name]);

  /* Controlled Forms allows us to do Form Validation */
  return (
    <form>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Your Name"
      />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Your Age"
      />
      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;
