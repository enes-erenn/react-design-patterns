import React from "react";
import NumberedList from "./components/NumberedLists";
import LargePersonList from "./components/people/LargePersonList";
import SmallPersonList from "./components/people/SmallPersonList";
import LargeProductList from "./components/product/LargeProductList";
import SmallProductList from "./components/product/SmallProductList";
import RegularList from "./components/RegularList";

const Lists = () => {
  const people = [
    {
      name: "John Doe",
      age: 54,
      hairColor: "brown",
      hobbies: ["swimming", "bicycling", "video games"],
    },
    {
      name: "Brenda Smith",
      age: 33,
      hairColor: "black",
      hobbies: ["golf", "mathematics"],
    },
    {
      name: "Jane Garcia",
      age: 27,
      hairColor: "blonde",
      hobbies: ["biology", "medicine", "gymnastics"],
    },
  ];

  const products = [
    {
      name: "Flat-Screen TV",
      price: "$300",
      description: "Huge LCD screen, a great deal",
      rating: 4.5,
    },
    {
      name: "Basketball",
      price: "$10",
      description: "Just like the pros use",
      rating: 3.8,
    },
    {
      name: "Running Shoes",
      price: "$120",
      description: "State-of-the-art technology for optimum running",
      rating: 4.2,
    },
  ];

  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonList}
      />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonList}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductList}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductList}
      />
    </>
  );
};

export default Lists;
