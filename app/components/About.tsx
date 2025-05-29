import Image from "next/image";
import leaf from "../../public/image/leaf.png";
import man from "../../public/image/man.png";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full py-[120px] relative bg-white">
      <Image
        src={leaf}
        width={60}
        alt="leaf"
        className="absolute top-[15%] left-[45%]"
      />
      <div className="flex w-11/12 mx-auto gap-16 items-center">
        <div className="w-1/2">
          <Image src={man} width={1000} alt="man" />
        </div>
        <div className="w-1/2">
          <h3 className="font-medium text-xl text-[#749B3F] bg-[#749B3F1A] inline rounded-lg px-3 py-1">
            About us
          </h3>
          <h2 className="font-medium text-5xl text-[#212337] mt-4">
            About Fresh Harvest
          </h2>
          <p className="font-normal text-sm text-[#4A4A52] mt-4">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <div className="flex mt-4">
            <Link
              href="/about-us"
              className="text-[#FF6A1A] border border-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white font-semibold text-lg px-8 py-4 rounded-lg"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
