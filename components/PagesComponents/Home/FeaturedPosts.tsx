import Image from "next/legacy/image";
import Link from "next/link";
import { CgAlarm } from "react-icons/cg";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const FeaturedPosts = () => {
  return (
    <div className="flex flex-col gap-y-12 lg:w-10/12 lg:px-16 my-8 mx-auto">
      <div className="flex flex-col text-center gap-y-1 text-base md:text-lg w-full mx-auto">
        <p className="font-semibold text-neutral-400">Practice Advice</p>
        <h3 className="font-bold text-xl md:text-2xl">Featured Posts</h3>
      </div>
      <div className="grid gap-4 md:grid-col-2 lg:grid-cols-3 items-center w-full gap-y-6 lg:gap-y-0">
        <div className="flex flex-col shadow-md max-w-[310px] md:max-w-[380px] w-full mx-auto gap-y-10">
          <div className="relative h-[250px] w-full ">
            <Image
              src="/assets/images/featured-post.png"
              alt="room picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="border border-t-0 px-5 pb-5 space-y-4">
            <div className="flex flex-row text-xs gap-x-5 ">
              <p className="text-blue-300">Google</p>
              <p className="text-neutral-500">Trending</p>
              <p className="text-neutral-500">New</p>
            </div>
            <p className="text-lg md:text-xl">Loudest à la Madison #1 (L'integral)</p>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a keystroke
              away.
            </p>
            <div className=" flex items-center justify-between font-light my-3">
              <div className="flex items-center gap-x-2 whitespace-nowrap">
                <CgAlarm className="text-2xl text-blue-400" />
                <span className="whitespace-nowrap">22 April 2021</span>
              </div>
              <div className="flex items-center gap-x-2 whitespace-nowrap">
                <FaChartArea className="text-2xl text-green-800" />
                <span className="whitespace-nowrap">10 comments</span>
              </div>
            </div>
            <Link
              href="/#"
              passHref
              className="font-semibold md:text-lg text-base flex items-center gap-x-2 hover:border-b hover:border-neutral-600 w-fit "
            >
              <span>Learn More</span>
              <IoIosArrowForward className="text-blue-400" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col shadow-md max-w-[310px] md:max-w-[380px] w-full mx-auto gap-y-10">
          <div className="relative h-[250px] w-full ">
            <Image
              src="/assets/images/feature-post(2).png"
              alt="room picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="border border-t-0 px-5 pb-5 space-y-4">
            <div className="flex flex-row text-xs gap-x-5 ">
              <p className="text-blue-300">Google</p>
              <p className="text-neutral-500">Trending</p>
              <p className="text-neutral-500">New</p>
            </div>
            <p className="text-lg md:text-xl">Loudest à la Madison #1 (L'integral)</p>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a keystroke
              away.
            </p>
            <div className=" flex items-center justify-between font-light my-3">
              <div className="flex items-center gap-x-2 whitespace-nowrap">
                <CgAlarm className="text-2xl text-blue-400" />
                <span className="whitespace-nowrap">22 April 2021</span>
              </div>
              <div className="flex items-center gap-x-2 whitespace-nowrap">
                <FaChartArea className="text-2xl text-green-800" />
                <span className="whitespace-nowrap">10 comments</span>
              </div>
            </div>
            <Link
              href="/#"
              passHref
              className="font-semibold md:text-lg text-base flex items-center gap-x-2 hover:border-b hover:border-neutral-600 w-fit "
            >
              <span>Learn More</span>
              <IoIosArrowForward className="text-blue-400" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col shadow-md max-w-[310px] md:max-w-[380px] w-full mx-auto gap-y-10">
          <div className="relative h-[250px] w-full ">
            <Image
              src="/assets/images/feature-post(3).png"
              alt="room picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="border border-t-0 px-5 pb-5 space-y-4">
            <div className="flex flex-row text-xs gap-x-5 ">
              <p className="text-blue-300">Google</p>
              <p className="text-neutral-500">Trending</p>
              <p className="text-neutral-500">New</p>
            </div>
            <p className="text-lg md:text-xl">Loudest à la Madison #1 (L'integral)</p>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a keystroke
              away.
            </p>
            <div className=" flex items-center justify-between font-light my-3">
              <div className="flex items-center gap-x-2 whitespace-nowrap">
                <CgAlarm className="text-2xl text-blue-400" />
                <span className="whitespace-nowrap">22 April 2021</span>
              </div>
              <div className="flex items-center gap-x-2 whitespace-nowrap">
                <FaChartArea className="text-2xl text-green-800" />
                <span className="whitespace-nowrap">10 comments</span>
              </div>
            </div>
            <Link
              href="/#"
              passHref
              className="font-semibold md:text-lg text-base flex items-center gap-x-2 hover:border-b hover:border-neutral-600 w-fit"
            >
              <span>Learn More</span>
              <IoIosArrowForward className="text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
