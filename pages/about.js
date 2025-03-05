import React, { useRef } from "react";
import Navbar from "./component/navbar";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
const About = () => {
  const seeMoreRef = useRef(null); // สร้าง ref สำหรับ div ที่ต้องการเลื่อนไปหา
  const handleScroll = () => {
    seeMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-white w-full h-dvh">
        <Navbar />
        <div className="w-full h-dvh bg-[#D4C8BE] flex items-center justify-center px-32">
          <div className="w-1/2 text-[#622A1F] font-[M_PLUS_Rounded_1c]">
            <h2 className="text-lg font-bold ml-40 mt-10]">
              MORE ABOUT ME
            </h2>
            <h1 className="mt-4 text-5xl font-bold ml-40  bg-[#976C62] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(160,82,45,0.8)] ">
              Frontend Developer
            </h1>
            <p className="mt-10 text-lg font-bold leading-relaxed w-[575px] ml-40  tracking-normal text-justify text-[#7F423D]">
              I'm Chanasorn Khemnak a passionate frontend developer dedicated to
              crafting seamless and engaging web experience With a strong eye
              for design and performance I specialize in creating intuitive
              responsive and visually stunning interfaces. My expertise spans
              React, Next.js and modern UI/UX principles always striving to push
              the boundaries of frontend development.
              <br />
            </p>
            <button
              onClick={handleScroll}
              className="cursor-pointer bg-[#622A1F] text-white font-semibold py-2 px-5 ml-40 
                rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-125 mt-14"
            >
              See More
            </button>
          </div>

          <div className="w-1/2 flex justify-center mt-20 ml-40">
            <div className="w-96 h-96 border-2 border-[#622A1F] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/profile2.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div ref={seeMoreRef} className="w-full h-dvh flex">
          <div className="bg-[#E7DFD5] w-1/2 h-dvh ">
            <div
              className="flex justify-center mt-40 text-4xl font-semibold font-[M_PLUS_Rounded_1c] 
            bg-[#976C62] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(160,82,45,0.8)]"
            >
              My Tech Stack
            </div>

            <div className="mt-5 flex items-center justify-center text-black gap-2">
              <div className="mt-10 grid grid-cols-3 gap-6 justify-center">
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md ">
                  <RiNextjsFill clasyyyyyyyyyyyysName="text-2xl " />
                  <span className="text-lg ">NextJS</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md">
                  <FaReact className="text-2xl text-blue-500" />
                  <span className="text-lg">React</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md">
                  <RiTailwindCssFill className="text-2xl text-blue-500 " />
                  <span className="text-lg">TailwindCss</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8">
                  <FaVuejs className="text-2xl text-green-500" />
                  <span className="text-lg">VueJS</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8">
                  <IoLogoJavascript className="text-2xl text-yellow-500" />
                  <span className="text-lg">JavaScript</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8">
                  <FaNodeJs className="text-2xl text-green-700" />
                  <span className="text-lg">NodeJS</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8">
                  <FaHtml5 className="text-2xl text-orange-500" />
                  <span className="text-lg">HTML</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8">
                  <FaCss3Alt className="text-2xl text-blue-500" />
                  <span className="text-lg">CSS</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8">
                  <SiPostman className="text-2xl text-orange-500" />
                  <span className="text-lg">Postman</span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gray-200 p-2 rounded-lg shadow-md mt-8">
                  <SiMysql className="text-2xl text-blue-500" />
                  <span className="text-lg">MySQL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#BA8C7B] w-1/2 h-dvh "></div>
        </div>
      </div>
      
    </>
  );
};

export default About;
