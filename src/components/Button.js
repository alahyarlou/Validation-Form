import React from "react";

const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="bg-indigo-600 text-white px-7 py-4 rounded-md transition-colors hover:bg-indigo-700"
    >
      {text}
    </button>
  );
};

export default Button;
