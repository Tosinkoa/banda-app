import Image from "next/legacy/image";
import { FaRegStar, FaStar } from "react-icons/fa";

const Review: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:gap-x-4 gap-y-10 md:gap-y-0 px-10 md:px-16 justify-between items-center lg:w-10/12 my-16 mx-auto">
      <div className="flex flex-col text-center w-fit mx-auto md:mr-auto gap-y-4">
        <h3 className="font-semibold text-lg md:text-2xl">What they say about us</h3>
        <div className="h-20 w-20 rounded-full relative mx-auto">
          <Image
            src="/assets/images/review-user.png"
            alt="user image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-center text-yellow-500 mx-auto md:text-2xl text-xl gap-x-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
        <p className="md:text-xl">
          Slate helps you see how many more days you need to work to <br /> reach your
          financial goal.
        </p>
        <div>
          <p className="md:text-xl font-semibold text-blue-500">Regina Miles</p>
          <p className="md:text-xl font-semibold text-neutral-600">Designer</p>
        </div>
      </div>
      <div className="h-fit w-fit grid grid-col-3 mx-auto">
        <div className="relative h-[280px] w-[280px] md:scale-125">
          <Image
            src="/assets/images/review-grid.png"
            alt="review grid images"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
