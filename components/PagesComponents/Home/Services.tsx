import Image from "next/legacy/image";
import { BiSolidBookReader } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20 lg:w-10/12 lg:px-16 my-8 mx-auto">
      <div className="flex flex-col text-center gap-y-1 text-base md:text-lg w-full mx-auto">
        <p className="font-semibold text-neutral-400">Featured Products</p>
        <h3 className="font-bold text-lg md:text-xl">THE BEST SERVICES</h3>
        <p className=" text-neutral-400 text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-between mx-auto gap-y-10 gap-x-6 w-full">
        <div className="flex flex-col text-center gap-y-2">
          <BiSolidBookReader className="mx-auto text-7xl text-[#23A6F0]" />
          <h3 className="font-bold text-lg md:text-xl">Easy Wins</h3>
          <p className="text-neutral-400">
            Get your best looking smile <br /> now!
          </p>
        </div>
        <div className="flex flex-col text-center gap-y-2">
          <div className="relative block h-[70px] w-[70px] mx-auto">
            <Image
              src="/assets/images/carbon-book.png"
              layout="fill"
              objectFit="cover"
              className="mx-auto"
            />
          </div>
          <h3 className="font-bold text-lg md:text-xl">Concrete</h3>
          <p className="text-neutral-400">
            Defalcate is most focused in <br /> helping you discover your most <br /> beautiful
            smile
          </p>
        </div>
        <div className="flex flex-col text-center gap-y-2">
          <FaArrowTrendUp className="mx-auto text-7xl text-[#23A6F0]" />
          <h3 className="font-bold text-lg md:text-xl">Growth</h3>
          <p className="text-neutral-400">
            Overcame any hurdle or any <br /> other problem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
