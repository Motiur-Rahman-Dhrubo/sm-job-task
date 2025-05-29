import Image from "next/image";
import React from "react";
import leaf from "../../public/image/leaf.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full pt-[100px] bg-[linear-gradient(to_right,_#EFEFEF_70%,_#749B3F_30%)] relative">
      <Image
        src={leaf}
        width={100}
        alt="leaf"
        className="absolute top-[15%] -left-[4%] rotate-[250deg]"
      />
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute top-[30%] left-[55%]"
      />
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute bottom-[25%] left-[5%]"
      />
      <div className="w-11/12 mx-auto min-h-[400px] flex">
        <div className="w-1/2 pt-10">
          <h2 className="text-[#749B3F] text-xl font-medium bg-[#749B3F1A] px-3 py-1 rounded-lg inline">
            Welcome to Fresh Harvest
          </h2>
          <h1 className="text-6xl font-medium mt-5 text-[#212337]">
            Fresh Fruits and <br /> Vegetables
          </h1>
          <p className="text-[#4A4A52] font-normal text-sm mt-4">
            At Fresh Harvests, we are passionate about providing you with the
            freshest <br /> and most flavorful fruits and vegetables
          </p>
          <Link href="/shop">Shop Now</Link>
        </div>
        <div className="w-1/2 bg-red-400 min-h-[200px]">
          <h2>Welcome to Fresh Harvest</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
