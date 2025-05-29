"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import icon from "../../public/image/icon.png"

const NavBar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const pathname = usePathname();

  const links = (
    <>
      <Link href="/" className={`relative hover:text-[#749B3F] transition-colors duration-200 ${pathname === "/" ? "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-[15px] after:bg-[#749B3F] after:rounded-full after:content-['']" : ""} `}>Home</Link>
      <Link href="/shop" className={`relative hover:text-[#749B3F] transition-colors duration-200  ${pathname === "/shop" ? "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-[15px] after:bg-[#749B3F] after:rounded-full after:content-['']" : ""}`}>Shop</Link>
      <Link href="/about-us" className={`relative hover:text-[#749B3F] transition-colors duration-200  ${pathname === "/about-us" ? "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-[15px] after:bg-[#749B3F] after:rounded-full after:content-['']" : ""}`}>About us</Link>
      <Link href="/blog" className={`relative hover:text-[#749B3F] transition-colors duration-200  ${pathname === "/blog" ? "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-[15px] after:bg-[#749B3F] after:rounded-full after:content-['']" : ""}`}>Blog</Link>
    </>
  );

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/0 backdrop-blur-xs shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between md:py-4 py-2">
      
        {/* logo */}
        <Link href="/" className="flex gap-2.5 text-3xl items-center text-[#212337] font-bold">
          <Image src={icon} width={40} height={40} alt="icon" />
          Fresh Harvest
        </Link>

        {/* links */}
        <div className="text-sm font-normal text-[#4A4A52] gap-16 lg:flex items-center hidden">{links}</div>

        {/* buttons */}
        <button className="border border-[#212337] text-[#212337] text-sm font-semibold rounded-sm hover:bg-[#212337] hover:text-white h-[40px] w-[100px]">Sign in</button>


        {/* mobile */}
        <button
          className="text-xl lg:hidden cursor-pointer"
          onClick={toggleDrawer}
        >
          <TfiMenuAlt />
        </button>
      </div>

      <div
        className={`fixed lg:hidden inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleDrawer}
      ></div>

      <div
        className={`fixed lg:hidden top-0 left-0 h-full min-w-64 w-1/2 bg-[#0F0C08] text-[#DCA54C] p-6 z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <h2>Menu:</h2>
          <button
            onClick={toggleDrawer}
            className="text-2xl mb-6 cursor-pointer hover:text-red-400"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {links}
          <Link
            href="/contact-us"
            className="w-fit border rounded-full hover:bg-[#DCA54C] hover:text-black px-5 py-1 flex items-center gap-2"
          >
            {" "}
            <FaRegEnvelope /> Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;