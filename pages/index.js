import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "./component/navbar";
import { FaReact } from "react-icons/fa";
const Index = () => {
  const fullText = "Frontend Developer";
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="w-full h-dvh flex relative">
        <div className="bg-white w-1/2 h-dvh relative">
          <img
            src="/profile.jpg"
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#D4C8BE] w-1/2 h-dvh relative flex justify-center items-center font-serif font-semibold text-7xl overflow-hidden">
          <motion.div
            className="absolute top-4 right-4 text-white text-6xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <FaReact />
          </motion.div>

          <div className="relative flex items-center">
            <motion.div
              className="overflow-hidden whitespace-nowrap text-[#622A1F] font-[M_PLUS_Rounded_1c]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {fullText}
            </motion.div>
          </div>
        </div>

        <Navbar />
      </div>
      <div className="w-full h-dvh flex">
        <div className="w-1/2 h-dvh bg-[#EFE6D9]">
          <div className="flex flex-col items-center justify-center h-screen text-center">
            <div className="text-[#622A1F] font-[M_PLUS_Rounded_1c] text-5xl font-bold">
              Hello I'm Chanasorn Khemnak
            </div>
            <div className="max-w-2xl mt-4 text-[#622A1F] font-[M_PLUS_Rounded_1c] text-justify text-xl">
              A passionate web developer with experience in designing and
              developing responsive web applications. I specialize in front-end
              development and have expertise in modern web technologies such as
              React, Next.js, JavaScript, and Node.js. I enjoy optimizing system
              performance and constantly seek opportunities to expand my skill
              set.
            </div>
          </div>
        </div>
        <div className="w-1/2 h-dvh bg-[#F6F7F0] flex items-center justify-center">
          <img
            src="/profile1.jpg"
            alt="Profile Image"
            className="w-[80%] h-auto object-contain border-4 border-[#622A1F] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
