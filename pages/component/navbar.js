import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "My Profile", path: "/myProfile" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [activeDimensions, setActiveDimensions] = useState({
    width: 0,
    left: 0,
  });
  const navRefs = useRef([]);

  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (item) => router.pathname === item.path
    );

    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const { offsetWidth, offsetLeft } = navRefs.current[activeIndex];
      setActiveDimensions({ width: offsetWidth, left: offsetLeft });
    }
  }, [router.pathname]);

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center items-center">
      <div className="relative flex flex-row items-center gap-x-4  px-4 py-2 rounded-full  ">
        <motion.div
          className="absolute top-0 left-0 h-full bg-white/40 rounded-full shadow-lg"
          initial={false}
          animate={{
            width: activeDimensions.width,
            left: activeDimensions.left,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {navItems.map((item, index) => (
          <Link key={item.path} href={item.path} passHref>
            <div
              ref={(el) => (navRefs.current[index] = el)}
              className={`relative px-6 py-2 text-black text-lg font-semibold cursor-pointer z-10 transition-all duration-300 flex justify-center hover:scale-125`}
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
