"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import man1 from "../../public/image/man1.jpg";
import man2 from "../../public/image/man2.jpg";
import man3 from "../../public/image/man3.jpg";

const testimonials = [
  {
    quote:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time.",
    name: "Jane Doe",
    role: "Professional chef",
    image: man1,
  },
  {
    quote:
      "Fresh Harvest has completely changed the way I shop for produce. Everything arrives fresh and on time, and I love the variety they offer. It's convenient, affordable, and reliable!",
    name: "Sarah Ahmed",
    role: "Health Blogger",
    image: man2,
  },
  {
    quote:
      "As a busy parent, Fresh Harvest has been a lifesaver! The produce is top-notch, and I don’t have to worry about running to the store. It’s fresh, fast, and hassle-free.",
    name: "Michael Chowdhury",
    role: "Working Parent",
    image: man3,
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-60 h-80 rounded-full overflow-hidden shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F4F6F6] p-8 rounded-3xl shadow">
                <p className="text-xl font-normal text-[#4A4A52]">
                  “{testimonial.quote}”
                </p>
                <p className="font-medium text-[#212337] mt-8">
                  {testimonial.name}{" "}
                  <span className="font-normal">
                    - {testimonial.role}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;