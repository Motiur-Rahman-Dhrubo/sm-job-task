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
      <Link href="/" className={`hover:bg-[#1E1812] lg:px-2 px-4 py-1 rounded-lg ${pathname === "/" ? "bg-[#1E1812]" : ""}`}>Home</Link>
      <Link href="/shop" className={`hover:bg-[#1E1812] lg:px-2 px-4 py-1 rounded-lg ${pathname === "/shop" ? "bg-[#1E1812]" : ""}`}>Shop</Link>
      <Link href="/about-us" className={`hover:bg-[#1E1812] lg:px-2 px-4 py-1 rounded-lg ${pathname === "/about-us" ? "bg-[#1E1812]" : ""}`}>About us</Link>
      <Link href="/blog" className={`hover:bg-[#1E1812] lg:px-2 px-4 py-1 rounded-lg ${pathname === "/blog" ? "bg-[#1E1812]" : ""}`}>Blog</Link>
    </>
  );

  return (
    <nav className="w-full sticky top-0 z-50 bg-black/90">
      <div className="w-11/12 mx-auto flex items-center justify-between md:py-4 py-2 text-[#DCA54C]">
        <Link href="/" className="flex gap-2.5 text-2xl lg:text-4xl">
          <Image src={icon} width={40} height={40} alt="icon" />
          Fresh Harvest
        </Link>
        <div className="text-lg gap-1 lg:flex items-center hidden">{links}</div>
        <Link
          href="/contact-us"
          className="border rounded-full hover:bg-[#DCA54C] hover:text-black px-5 py-1 hidden lg:flex items-center gap-2"
        >
          {" "}
          <FaRegEnvelope /> Contact Us
        </Link>

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
            <FaRegEnvelope /> Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;