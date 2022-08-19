import React from "react";

const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        color: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
