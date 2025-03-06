import React from "react";

const Card = () => {
  return (
    <div className="ml-20 w-2/3 h-1/3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-12 overflow-hidden">
      <img
        className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:-rotate-6 hover:scale-105"
        src="/project1.jpg"
        alt="Project 1"
      />
    </div>
  );
};

export default Card;
