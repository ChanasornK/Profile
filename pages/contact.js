import React from "react";
import Head from "next/head";
import Navbar from "./component/navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Navbar2 from "./component/navbar2";
const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Navbar />
      <Navbar2 />
      <div className="flex">
        <div className="bg-[#D4C8BE] xl:w-1/2 h-dvh flex justify-center w-full">
          <div
          style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }} className="mt-42 text-4xl font-bold text-[#976C62] text-center">
            Contact Me
            <div
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
              className="text-[#622A1F]  mt-14 ml-12 flex items-center space-x-2 text-md text-sm xl:text-xl"
            >
              <FaPhoneAlt />
              <span>095-8462169</span>
            </div>
            <div
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
              className="text-[#622A1F] mt-5 ml-12 flex items-center space-x-2  text-sm xl:text-xl"
            >
              <IoMail />
              <span>chanasorn.kn@gmail.com</span>
            </div>
            <div
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
              className="text-[#622A1F] mt-5 ml-12 flex items-center space-x-2 text-sm xl:text-xl"
            >
              <FaGithub />
              <a
                href="https://github.com/ChanasornK/Profile.git"
                target="_blank"
              >
              https://github.com/ChanasornK/Profile.git
              </a>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 hidden xl:block  justify-center  bg-[#E9DAD0]">
          <div className="w-96 h-96 border-2 border-[#622A1F] rounded-full overflow-hidden mt-40 ml-40">
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
