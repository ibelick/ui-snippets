import React from "react";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} className="border border-gray-300 rounded-md p-2" />;
};

export default Input;
