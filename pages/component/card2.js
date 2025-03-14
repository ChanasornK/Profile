import React, { useState } from "react";
import { motion } from "framer-motion";

const Card2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
         className=" xl:max-w-md h-auto xl:ml-32 bg-[#807974] border-[#807974]  rounded-xl shadow-sm mt-12 overflow-hidden  "
        onClick={() => setIsOpen(true)}
      >
        <img
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out "
          src="/project2.jpg"
          alt="Project 2"
        />
      </div>

      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.img
            src="/project2.jpg"
            alt="Project 2"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg cursor-pointer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
      )} */}
    </>
  );
};

export default Card2;
