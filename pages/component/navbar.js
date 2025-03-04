import React from "react";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const showProfile = () => {
    router.push("../myProfile");
  };
  const goGoHome = () => {
    router.push("../");
  };
  return (
    <div className="absolute top-6 left-0 w-full h-14 text-black flex justify-center items-center">
      <div className="w-auto text-black h-14 flex flex-row items-center px-4 gap-x-4">
        <div
          onClick={goGoHome}
          className="pl-7 cursor-pointer  transform transition-transform duration-300 hover:scale-125"
        >
          Home
        </div>
        <div
          onClick={showProfile}
          className="pl-7 cursor-pointer  transform transition-transform duration-300 hover:scale-125"
        >
          My Profile
        </div>

        <div className="pl-7">About</div>
        <div className="pl-7">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
