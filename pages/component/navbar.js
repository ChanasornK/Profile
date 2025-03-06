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
    // { name: "Contact", path: "/contact" },
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
      setActiveDimensions({
        width: offsetWidth - 16, // ลดขนาด active indicator
        left: offsetLeft + 8, // ขยับให้ตรงกลาง
      });
    }
  }, [router.pathname]);

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center items-center">
      <div className="relative flex flex-row items-center gap-x-4 px-4 py-2 rounded-full border border-white/50 bg-white/20 backdrop-blur-lg shadow-lg">
        
        {/* Active Indicator */}
        <motion.div
          layout
          className="absolute top-1/2 left-0 h-8 bg-[#b8aba1] rounded-full shadow-lg -translate-y-1/2"
          initial={false}
          animate={{
            x: activeDimensions.left, // ใช้ x แทน left เพื่อให้ transition smooth
            width: activeDimensions.width,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30, ease: "easeInOut" }}
        />

        {navItems.map((item, index) => (
          <Link key={item.path} href={item.path} passHref>
            <div
              ref={(el) => (navRefs.current[index] = el)}
              className="relative px-6 py-1 text-black text-lg font-semibold cursor-pointer z-10 transition-all duration-300 flex justify-center hover:scale-110"
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
