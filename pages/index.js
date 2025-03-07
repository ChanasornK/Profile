import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "./component/navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
const Index = () => {
  const fullText = "Frontend Developer";
  const router = useRouter();
  const goContact=()=>{
    router.push('./contact')
  }
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <div className="w-full h-dvh flex relative">
        <div className="bg-white w-1/2 h-dvh relative">
          <img
            src="/profile.jpg"
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#D4C8BE] w-1/2 h-dvh relative flex justify-center items-center font-serif font-semibold text-6xl overflow-hidden">
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
          <div className="flex flex-col items-center justify-center h-screen text-center px-6">
            <h1 className="text-[#622A1F] font-[M_PLUS_Rounded_1c] text-4xl font-extrabold leading-tight">
              Hello I'm Chanasorn Khemnak
            </h1>
            <p className="max-w-xl mt-6 text-[#622A1F] font-[M_PLUS_Rounded_1c] text-lg text-justify leading-normal ">
              A passionate web developer with a keen eye for crafting dynamic
              and responsive web experiences. Specializing in front-end
              development, I leverage modern technologies like
              <strong className="mx-2">
                Vue.js, Next.js, JavaScript, Tailwind CSS, and Node.js
              </strong>
              to build seamless digital solutions. I thrive on optimizing system
              performance and continuously evolving my skills to stay ahead in
              the ever-changing tech landscape.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-dvh bg-[#F6F7F0] flex items-center justify-center">
          <img
            src="/project3.jpg"
            alt="Profile Image"
            className="w-[80%] h-auto object-contain border-4 border-[#622A1F] rounded-lg shadow-lg transition-all duration-300  hover:scale-110"
          />
        </div>
      </div>
      <div className="w-full h-96 flex bg-[#E9DAD0] relative">
        <div className="w-1/2 h-72 relative">
          <div className="absolute bottom-[-24] left-44 h-96 bg-[#D4BAB0] w-lg shadow-lg rounded-lg">
            <div className="mt-16 ml-8 text-[#622A1F] font-[M_PLUS_Rounded_1c] font-semibold">
              STAY CONNECTED
              <div className="mt-5">
                <p className="font-[M_PLUS_Rounded_1c] font-bold text-4xl">
                  Let's build the next
                </p>
                <p className="font-[M_PLUS_Rounded_1c] font-bold text-4xl mt-5">
                  great thing together
                </p>
                <button  onClick={goContact}
                 
                  className="cursor-pointer bg-[#622A1F]  text-white font-semibold py-2 px-5 
                rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-125 mt-20"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2  text-black pt-10   ">
          <div className="text-black mt-4 text-xl font-[M_PLUS_Rounded_1c] font-semibol ml-2">
            CONTACT ME
          </div>
          <div className="text-black mt-6 ml-2 flex items-center space-x-2 text-md">
            <FaPhoneAlt />
            <span>095-8462169</span>
          </div>
          <div className="text-black mt-5 ml-2 flex items-center space-x-2 text-md">
            <IoMail />
            <span>chanasorn.kn@gmail.com</span>
          </div>
          <div className="text-black mt-5 ml-2 flex items-center space-x-2 text-md">
            <FaGithub />
            <span>https://github.com/ChanasornK/Profile.git</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
