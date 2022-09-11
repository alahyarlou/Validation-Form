import React from "react";

const Error = ({ error }) => {
  return (
    <p className="text-sm flex items-center gap-x-2 text-red-700 bg-red-200 p-2 rounded-md font-medium">
      {error}
    </p>
  );
};

export default Error;
