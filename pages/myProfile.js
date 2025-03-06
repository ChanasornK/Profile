import React from "react";
import Navbar from "./component/navbar";
import Card from "./component/card";
import { LuSparkle } from "react-icons/lu";
import { SiCplusplus } from "react-icons/si";
const myProfile = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="bg-[#D4C8BE] w-1/2 h-dvh flex justify-center">
          <div className="mt-42 text-4xl font-bold text-[#976C62] text-center">
            Curated
            <span className="bg-gradient-to-r from-[#ff7e5f] via-[#ff6a88] to-[#ff3f8f] text-transparent bg-clip-text ml-3">
              Work
            </span>
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
          <div className=" w-24 flex items-center justify-center gap-1 bg-black/80 p-2 rounded-xl shadow-md mt-8 ml-20">
            <SiCplusplus className="text-2xl text-green-500" />
            <span className="text-lg ml-2">C++</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default myProfile;
