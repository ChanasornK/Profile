import React from "react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="w-full h-dvh flex relative">
      <div className="bg-white w-1/2 h-dvh relative"></div>

      {/* Animated Typing Effect */}
      <div className="bg-pink-400 w-1/2 h-dvh relative flex justify-center items-center font-serif text-6xl overflow-hidden">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Frontend Developer
        </motion.div>
      </div>

      {/* Navigation Bar */}
      <div className="absolute top-6 left-0 w-full h-14 text-black flex justify-center items-center">
        <div className="bg-black w-auto text-red-500 h-14 flex flex-row items-center px-4 gap-x-4">
          <div className="pl-7">Home</div>
          <div className="pl-7">My Profile</div>
          <div className="pl-7">About</div>
          <div className="pl-7">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
