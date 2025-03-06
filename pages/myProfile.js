import React from "react";
import Navbar from "./component/navbar";
import Card from "./component/card";
import { LuSparkle } from "react-icons/lu";
const myProfile = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="bg-[#D4C8BE] w-1/2 h-dvh">
          <div className="mt-48  text-4xl font-bold text-[#976C62] ">
            Curated
            <span className="bg-gradient-to-r from-[#ff7e5f] via-[#ff6a88] to-[#ff3f8f] text-transparent bg-clip-text ml-3">
              Work
            </span>
            <Card />
          </div>
        </div>
        <div className="bg-[#F6F7F0] w-1/2 h-dvh">
          <div className="mt-72 text-[#622A1F] font-[M_PLUS_Rounded_1c] text-xl flex items-center gap-3">
            <div className="w-8 h-1 bg-[#D4C8BE]] rounded-full"></div>
            <span>IOT TO ALERT LIQUID LEVEL BELOW CRITICAL</span>
          </div>
          <div className="flex items-center gap-2 ">
            <LuSparkle className="text-pink-400 text-2xl " />
            <span className="pt-12 text-lg text-black">
              Ultrasonic level measurement works by reflecting sound waves off a
              liquid surface, measuring the round-trip travel time, and using
              this data to calculate liquid level changes.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default myProfile;
