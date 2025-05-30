import Image from "next/image";
import Link from "next/link";
import icon from "../../public/image/icon.png";
import playStore from "../../public/image/play-store.png";
import appStore from "../../public/image/app-store.png";
import visa from "../../public/image/visa.png";
import paypal from "../../public/image/paypal.png";
import ipay from "../../public/image/ipay.png";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#F4F6F6]">
      <div className="w-11/12 mx-auto flex gap-12 pt-14">
        <div className="w-4/12 flex flex-col justify-between">
          <Link
            href="/"
            className="flex gap-2.5 text-3xl items-center text-[#212337] font-bold"
          >
            <Image src={icon} width={40} height={40} alt="icon" />
            Fresh Harvest
          </Link>
          <div className="mt-4">
            <h3 className="font-medium text-xs text-[#212337]">
              Download App:
            </h3>
            <div className="flex gap-5 mt-3">
              <a href="https://www.apple.com/app-store/" target="_blank">
                <Image src={appStore} alt="app store" height={60} />
              </a>
              <a
                href="https://play.google.com/store/games?device=windows"
                target="_blank"
              >
                <Image src={playStore} alt="play store" height={60} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/12">
          <h4 className="text-[#212337] font-medium text-lg">Quick links 1</h4>
          <div className="flex flex-col mt-3 gap-3">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="w-2/12">
          <h4 className="text-[#212337] font-medium text-lg">Quick links 2</h4>
          <div className="flex flex-col mt-3 gap-3">
            <Link href="/">Favorites</Link>
            <Link href="/">Cart</Link>
            <Link href="/">Sign in</Link>
            <Link href="/">Register</Link>
          </div>
        </div>
        <div className="w-4/12">
          <h4 className="text-[#212337] font-medium text-lg">Contact us</h4>
          <div className="flex flex-col mt-3 gap-3">
            <p className="flex items-center gap-2">
              <BsTelephoneFill className="text-[#749B3F]" />
              +880 1234 56789
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#749B3F]" />
              Freshharvests@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#749B3F]" />
              Tanjung Sari Street, Pontianak, Indonesia
            </p>
          </div>
          <h3 className="mt-7 font-medium text-xs text-[#212337]">
            Accepted Payment Methods:
          </h3>
          <div className="flex gap-2 mt-3">
            <Image src={visa} height={70} alt="visa" className="rounded-sm" />
            <Image
              src={paypal}
              height={70}
              alt="paypal"
              className="rounded-sm"
            />
            <Image src={ipay} height={70} alt="ipay" className="rounded-sm" />
          </div>
        </div>
      </div>
      <hr className="mt-8 w-11/12 mx-auto border-[#D9D9D9]" />
      <div className="w-11/12 mx-auto flex justify-between items-center py-6">
        <h4 className="font-medium text-xs text-[#212337]">
          © Copyright 2024, All Rights Reserved by Banana Studio
        </h4>
        <div className="flex gap-2 text-4xl text-[#212337]">
          <a href="https://x.com/" target="_blank">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <MdOutlineFacebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <RiInstagramFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
