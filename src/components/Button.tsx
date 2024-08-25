import React from "react";
interface ButtonProps {
  label: string;
}
export const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="bg-gray-3700 py-2 w-full text-center rounded-lg  focus:outline-none focus:ring-green-500 focus:bg-green focus:text-black  focus:font-semibold transition-all duration-200 ease-in-out">
      {label}
    </button>
  );
};
