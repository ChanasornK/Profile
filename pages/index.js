import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "./component/navbar";
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

        <div className="bg-[#FF0066] w-1/2 h-dvh relative flex justify-center items-center font-serif font-semibold text-7xl overflow-hidden">
          <div className="relative flex items-center">
            <motion.div
              className="overflow-hidden whitespace-nowrap"
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
    </>
  );
};

export default Index;
