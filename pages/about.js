import React from "react";
import Navbar from "./component/navbar";
const about = () => {
  return (
    <>
      <div className="bg-white w-full h-dvh  ">
        <Navbar />
        <div className="w-full h-dvh bg-[#D4C8BE] pt-48 ">
          <div className="bg-[#D4C8BE] w-full text-[#622A1F] font-[M_PLUS_Rounded_1c] text-lg font-bold">
            <div className="ml-72 font-bold font-[M_PLUS_Rounded_1c] ">MORE ABOUT ME</div>
            <div className="ml-72 mt-10 text-[#622A1F] font-[M_PLUS_Rounded_1c] text-5xl font-bold relative">
              Frontend Developer
              <div className="absolute top-28 right-96 transform -translate-y-1/2 w-80 h-80  rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/profile2.jpg"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="ml-72 mt-10 font-bold font-[M_PLUS_Rounded_1c]">
              I'm Chanasorn Khemnak
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
