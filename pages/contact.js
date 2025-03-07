import React from "react";
import Head from "next/head";
import Navbar from "./component/navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="flex">
        <div className="bg-[#D4C8BE] w-1/2 h-dvh flex justify-center">
          <div className="mt-42 text-4xl font-bold bg-[#976C62] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(160,82,45,0.8)] text-center">
            Contact Me
            <div className="text-[#622A1F]  mt-14 ml-20 flex items-center space-x-2 text-md text-2xl">
              <FaPhoneAlt />
              <span>095-8462169</span>
            </div>
            <div className="text-[#622A1F] mt-5 ml-20 flex items-center space-x-2 text-md text-2xl">
              <IoMail />
              <span>chanasorn.kn@gmail.com</span>
            </div>
            <div className="text-[#622A1F] mt-5 ml-20 flex items-center space-x-2 text-md text-2xl">
              <FaGithub />
              <span>https://github.com/ChanasornK/Profile.git</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center  bg-[#E9DAD0]">
            <div className="w-96 h-96 border-2 border-[#622A1F] rounded-full overflow-hidden mt-40 mr-40">
              <img
                className="w-full h-full object-cover"
                src="/profile3.jpg"
                alt="Profile"
              />
            </div>
          </div>
      </div>
    </>
  );
};

export default contact;
