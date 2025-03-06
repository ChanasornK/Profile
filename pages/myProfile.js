import React from "react";
import Navbar from "./component/navbar";
import Card from "./component/card";
import { LuSparkle } from "react-icons/lu";
import { SiCplusplus } from "react-icons/si";
import Card2 from "./component/card2";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { useState } from "react";
import Head from "next/head";
import Modal from "./component/modal";
const myProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <Head>
        <title> My Profile</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Navbar />
      <div className="flex">
        <div className="bg-[#D4C8BE] w-1/2 h-dvh flex justify-center">
          <div className="mt-42 text-4xl font-bold text-[#976C62] text-center">
            Curated Work
           
            <Card />
          </div>
        </div>

        <div className="bg-[#E7DFD5] w-1/2 h-dvh">
          <div className="mt-64 text-[#622A1F] font-[M_PLUS_Rounded_1c] text-xl flex items-center gap-3 ml-10 ">
            <span className="font-bold mb-5 text-2xl">
              IOT TO ALERT LIQUID LEVEL BELOW CRITICAL
            </span>
          </div>
          <div className=" flex items-start gap-2">
            <LuSparkle className="text-[#C4744D] text-2xl mt-5 ml-4" />
            <span className="text-lg text-[#622A1F] font-serif mt-5 w-3/4 ">
              Ultrasonic level measurement determines liquid levels by
              reflecting sound waves off the surface and measuring their
              round-trip time.
            </span>
          </div>
          <div className=" flex items-start gap-2">
            <LuSparkle className="text-[#C4744D] text-2xl mt-5 ml-4 " />
            <span className="text-lg text-[#622A1F] mt-5 w-3/4 font-serif">
              Design a water level alert system that notifies users when it
              reaches a critical point the LINE application and displays
              real-time water levels.
            </span>
          </div>
          <div className=" w-24 flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-xl shadow-md mt-18 ml-14">
            <SiCplusplus className="text-2xl text-green-500" />
            <span className="text-lg ml-2 text-black">C++</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 h-dvh bg-[#d4c8be]">
          <Card2 />
        <div className="mt-10 ml-60">
        <button
              className="bg-[#C4744D] text-white p-2 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-125"
              onClick={() => setIsModalOpen(true)}
            >
              See More
            </button>
        </div>
        </div>
        <div className="w-1/2 h-dvh bg-[#E7DFD5]">
          <div className="mt-44 text-[#622A1F] font-[M_PLUS_Rounded_1c] text-xl flex items-center gap-3 ml-10 ">
            <span className="font-bold mb-5 text-2xl">
              ReviewZone Web Application
            </span>
          </div>
          <div className=" flex items-start gap-2">
            <LuSparkle className="text-[#C4744D] text-2xl mt-5 ml-4" />
            <span className="text-lg text-[#622A1F] font-serif mt-5 w-3/4 ">
              Create a product search and filter system that allows users to
              search for products using keywords to access the desired product
              information
            </span>
          </div>
          <div className=" flex items-start gap-2">
            <LuSparkle className="text-[#C4744D] text-2xl mt-5 ml-4" />
            <span className="text-lg text-[#622A1F] font-serif mt-5 w-3/4 ">
              Create a user register and login page to securely store user
              information along with an OTP-based password recovery feature for
              users
            </span>
          </div>
          <div className="mt-5 flex  text-black gap-2 ml-10">
            <div className="mt-10 grid grid-cols-3 gap-3 justify-center">
              <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md  w-auto">
                <RiNextjsFill className="text-2xl " />
                <span className="text-lg ">NextJS</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md w-auto">
                <FaReact className="text-2xl text-blue-500" />
                <span className="text-lg">React</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md w-auto">
                <RiTailwindCssFill className="text-2xl text-blue-500 " />
                <span className="text-lg">TailwindCss</span>
              </div>

              <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8 w-auto">
                <IoLogoJavascript className="text-2xl text-yellow-500" />
                <span className="text-lg">JavaScript</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8 w-auto">
                <FaNodeJs className="text-2xl text-green-700" />
                <span className="text-lg">NodeJS</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8 w-auto">
                <FaHtml5 className="text-2xl text-orange-500" />
                <span className="text-lg">HTML</span>
              </div>
              <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8 w-auto">
                <FaCss3Alt className="text-2xl text-blue-500" />
                <span className="text-lg">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default myProfile;
