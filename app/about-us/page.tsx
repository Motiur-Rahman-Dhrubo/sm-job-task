import Image from "next/image";
import man from "../../public/image/man.png";

const aboutPage = () => {
  return (
    <div className="w-full bg-white py-[80px]">
      <div className="flex w-11/12 pt-8 mx-auto gap-16 items-center">
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
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
