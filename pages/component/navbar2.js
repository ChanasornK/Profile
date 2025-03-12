import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="p-4 fixed  xl:hidden w-full bg-[#BA8C7B] ">
        CHANASORN
        <button onClick={toggleMenu}>
          <IoMdMenu className="text-3xl text-[#622A1F] fixed right-5 top-3" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed mt-12 right-2 bg-gray-200 shadow-lg rounded-lg p-4 w-48 flex flex-col space-y-3"
          >
            <div className="flex items-center space-x-3 hover:bg-[#D2BFA6] px-1 py-1 rounded-md cursor-pointer">
              <FaHome className="text-[#622A1F]" />
              <a href="../" className="text-[#C4744D] font-bold ">
                Home
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:bg-[#D2BFA6] px-1 py-1 rounded-md cursor-pointer">
              <IoMdContact className="text-[#622A1F] font-bold " />
              <a href="../myProfile" className="text-[#C4744D] font-bold  ">
                My Profile
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:bg-[#D2BFA6] px-1 py-1 rounded-md cursor-pointer">
              <FaInfoCircle className="text-[#622A1F]" />
              <a href="../about" className="text-[#C4744D]  font-bold ">
                About
              </a>
            </div>
            <div className="flex items-center space-x-3 hover:bg-[#D2BFA6] px-1 py-1 rounded-md cursor-pointer">
              <IoMail className="text-[#622A1F]" />
              <a href="../contact" className="text-[#C4744D]  font-bold ">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar2;
