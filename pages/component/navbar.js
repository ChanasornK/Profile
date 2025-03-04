import React from "react";
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

  const activeIndex = navItems.findIndex(
    (item) => router.pathname === item.path
  );

  return (
    <div className="absolute top-6 left-0 w-full flex justify-center items-center">
      <div className="relative flex flex-row items-center px-2 gap-x-4 ">
        <motion.div
          className="absolute left-0 top-0 h-full bg-white/40 rounded-full backdrop-blur-md shadow-md text-bl"
          initial={false}
          animate={{
            width: `${(100 / navItems.length) * 0.6}%`, // ทำให้แถบเล็กลง 60% ของเดิม
            left: `${(activeIndex / navItems.length) * 100}%`,
            x: "20%", // เลื่อนแถบไปตรงกลางตัวอักษร (ปรับค่าได้ตามต้องการ)
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {navItems.map((item, index) => (
          <Link key={item.path} href={item.path} passHref>
            <div
              className={`relative px-6 py-2 text-black text-xl font-[M_PLUS_Rounded_1c] cursor-pointer z-10 transition-all duration-300
              ${
                router.pathname === item.path
                  ? "text-black font-semibold"
                  : "hover:text-black hover:scale-125"
              }`}
              style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }} // Inline style
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
