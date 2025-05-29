import Image from "next/image";
import React from "react";
import leaf from "../../public/image/leaf.png";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  return (
    <div className="w-full pt-[120px] relative bg-white">
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute top-[28%] right-[15%]"
      />
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute top-[25%] left-[15%] rotate-[45deg]"
      />
      <div className="flex w-11/12 mx-auto flex-col items-center">
        <h3 className="font-medium text-xl text-[#749B3F] text-center bg-[#749B3F1A] inline rounded-lg px-3 py-1">
          Testimonial
        </h3>
        <h2 className="font-medium text-5xl text-center text-[#212337] mt-4">
          What Our Customers Say
        </h2>
        <p className="font-normal text-sm text-[#4A4A52] text-center mt-4">
          Don’t just take our word for it—here’s what some of our
          customers have to <br /> say about their experience with Fresh
          Harvest:
        </p>
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
