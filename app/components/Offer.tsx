import React from "react";
import bg from "../../public/image/bg.png";
import fruits from "../../public/image/fruits.png";
import leaf from "../../public/image/leaf.png";
import Countdown from "./Counter";
import Image from "next/image";

const Offer = () => {
  return (
    <div
      className="w-full bg-cover bg-center relative overflow-x-hidden"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute top-[10%] right-[25%] rotate-[240deg]"
      />
      <Image
        src={leaf}
        width={120}
        alt="leaf"
        className="absolute bottom-[6%] -right-[3%] rotate-[5deg]"
      />
      <div className="w-11/12 mx-auto py-20 relative">
        <h3 className="font-medium text-xl text-[#749B3F] bg-[#749B3F1A] inline rounded-lg px-3 py-1">
          Special Offer
        </h3>
        <h2 className="font-medium text-7xl text-[#212337] mt-4">
          Seasonal Fruit Bundle
        </h2>
        <h4 className="text-[#212337] font-medium text-5xl mt-2">
          Discount up to <span className="text-[#FF6A19]">80% OFF</span>
        </h4>
        <Countdown targetDate="2025-06-05T00:00:00" />
        <div className="flex mt-8">
          <p className="font-semibold text-3xl text-white rounded-[35px] py-4 px-8 bg-[#176D38] text-center">
            CODE : <span className="text-[#FAC714]">FRESH25</span>
          </p>
        </div>
        <Image
          src={fruits}
          width={550}
          alt="fruits"
          className="absolute right-0 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Offer;
