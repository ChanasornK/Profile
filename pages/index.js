import React, { useState } from "react";
import Navbar from "./component/navbar";
import Navbar2 from "./component/navbar2";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "next/head";
const Index = () => {
  const router = useRouter();
  const goContact = () => {
    router.push("./contact");
  };
  return (
    <>
    <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <div className="w-full h-dvh flex relative">
        <Navbar />
        <div className="w-full md:bg-white xl:block hidden md:hidden">
          <img
            src="/profile.jpg"
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full bg-[#D4C8BE] h-dvh md:text-6xl text-2xl flex justify-center items-center text-[#622A1F] font-bold">
          Frontend Developer
        </div>

        <Navbar2 />
      </div>
      <div className="w-full h-auto flex flex-col xl:flex-row">
        <div className="bg-[#EFE6D9] w-full h-dvh flex flex-col px-6 ">
          <h1 className="text-[#976C62] text-4xl font-extrabold leading-tight text-start md:text-8xl mt-20 drop-shadow-[0_0_10px_rgba(160,82,45,0.8)]">
            Chanasorn Khemnak
          </h1>

          <p
            style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            className="mt-6 text-[#622A1F]  
            font-[M_PLUS_Rounded_1c] 
            text-xl leading-normal 
            md:max-w-3xl md:text-2xl 
            text-left 
            md:ml-10 
            md:mt-20"
          >
            A passionate web developer with a keen eye for crafting dynamic and
            responsive web experiences. Specializing in frontend developer, I
            leverage modern technologies like
            <strong className="mx-2">
              Next.js, JavaScript, Tailwind CSS, and Node.js
            </strong>
            to build seamless digital solutions. I thrive on optimizing system
            performance and continuously evolving my skills to stay ahead in the
            ever-changing tech landscape.
          </p>
        </div>
        <div className="bg-[#F6F7F0] w-full h-dvh flex items-center justify-center ">
          <img
            src="/project3.jpg"
            alt="Profile Image"
            className="w-[80%] h-auto object-contain border-4 border-[#622A1F] rounded-lg shadow-lg transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>
      <div className="w-full h-[50dvh] xl:flex bg-[#E9DAD0] relative hidden">
        <div className="absolute bottom-[12] left-44 h-96 bg-[#D4BAB0] w-1/3 shadow-lg rounded-lg">
          <div className="mt-16 ml-8 text-[#622A1F] font-[M_PLUS_Rounded_1c] font-semibold">
            STAY CONNECTED
            <div className="mt-5">
              <p className="font-[M_PLUS_Rounded_1c] font-bold text-4xl">
                Let's build the next
              </p>
              <p className="font-[M_PLUS_Rounded_1c] font-bold text-4xl mt-5">
                great thing together
              </p>
              <button
                style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
                onClick={goContact}
                className="cursor-pointer bg-[#622A1F]  text-white font-semibold py-2 px-5 
                rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-125 mt-20"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className=" text-black pt-10 ml-[800px]">
          <div
            style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            className="text-black mt-4 text-xl font-bold ml-2"
          >
            CONTACT ME
          </div>
          <div
            style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            className="text-black mt-6 ml-2 flex items-center space-x-2 text-md font-bold"
          >
            <FaPhoneAlt />
            <span>095-8462169</span>
          </div>
          <div
            style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            className="text-black mt-5 ml-2 flex items-center space-x-2 text-md font-bold"
          >
            <IoMail />
            <span>chanasorn.kn@gmail.com</span>
          </div>
          <div
            style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            className="text-black mt-5 ml-2 flex items-center space-x-2 text-md font-bold"
          >
            <FaGithub />
            <span>https://github.com/ChanasornK/Profile.git</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
