import React from "react";

const ProductInfo = ({ product }) => {
  const { name, price, description, rating } = product || {};
  return product ? (
    <>
      <h3>Name: {name}</h3>
      <p>Price: {price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>loading</p>
  );
};

export default ProductInfo;
