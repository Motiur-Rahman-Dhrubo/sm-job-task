import Image from "next/image";
import React from "react";
import leaf from "../../public/image/leaf.png";
import arrow from "../../public/image/arrow.png";
import Link from "next/link";
import circle from "../../public/image/circle.png";
import plat from "../../public/image/plat.png";
import playStore from "../../public/image/play-store.png";
import appStore from "../../public/image/app-store.png";
import girl from "../../public/image/girl.png";

const Hero = () => {
  return (
    <div className="w-full pt-[80px] bg-[linear-gradient(to_right,_#EFEFEF_70%,_#749B3F_30%)] relative overflow-x-hidden">
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
      <div className="w-11/12 mx-auto flex">
        <div className="w-1/2 pt-10 pb-[80px]">
          <h2 className="text-[#749B3F] text-xl font-medium bg-[#749B3F1A] px-3 py-1 rounded-lg inline">
            Welcome to Fresh Harvest
          </h2>
          <h1 className="text-7xl font-medium mt-3 text-[#212337]">
            Fresh Fruits and <br /> Vegetables
          </h1>
          <p className="text-[#4A4A52] font-normal text-sm mt-3">
            At Fresh Harvests, we are passionate about providing you with the
            freshest <br /> and most flavorful fruits and vegetables
          </p>
          <Link
            href="/shop"
            className="text-white font-semibold text-lg bg-[#FF6A1A] rounded-lg border border-[#FF6A1A] w-[150px] h-[50px] flex items-center justify-center mt-4"
          >
            Shop Now
          </Link>
          <div className="flex mt-1">
            <div className="w-4/12">
              <Image src={arrow} alt="arrow" />
            </div>
            <div className="w-7/12 justify-between items-center bg-[#EBEBEB] p-5 rounded-xl flex">
              <div className="w-1/2">
                <p className="text-sm font-medium text-[#176D38]">
                  Special Offer
                </p>
                <h2 className="font-medium text-[28px] text-[#212337]">
                  Fresh Salad
                </h2>
                <div className="flex gap-2">
                  <p className="text-[#176D38] font-medium text-base pt-1">
                    Up to
                  </p>
                  <div className="relative w-[50px]">
                    <Image
                      src={circle}
                      width={50}
                      alt="circle"
                      className="absolute top-0 left-0"
                    />
                    <p className="absolute top-0 left-0 text-2xl font-medium text-[#212337]">
                      70%
                    </p>
                  </div>
                  <p className="font-medium text-base text-[#212337] pt-1">
                    off
                  </p>
                </div>
                <p className="font-semibold text-xs text-white rounded-[35px] py-[6px] px-3 bg-[#176D38] text-center mt-3">
                  CODE : <span className="text-[#FAC714]">FRESH25</span>
                </p>
              </div>
              <div className="w-1/2 flex justify-end">
                <Image src={plat} width={150} alt="plat" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-[#4A4A52] font-normal text-sm">
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

        <div className="w-1/2">
          <div className="w-[120%]">
            <Image src={girl} width={1000} alt="girl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
