import Image from "next/legacy/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-7 md:grid-rows-2 w-full h-[fit] md:h-[80vh] gap-8 lg:w-10/12  mx-auto">
      <div className="h-[350px] mx-auto w-[300px] md:w-full md:h-full relative md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-4">
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10 flex flex-col p-7 md:p-8 font-bold text-lg gap-y-3">
          <p className="text-[#2DC071]">5 Items</p>
          <p className="text-3xl ">FURNITURE</p>
          <p>Read More</p>
        </div>
        <Image
          src="/assets/images/media-bg-cover.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[350px] mx-auto w-[300px] md:w-full md:h-full relative md:col-start-4 md:col-end-8 md:row-start-1 md:row-end-1">
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10 flex flex-col p-7 md:p-8 font-bold text-lg gap-y-3">
          <p className="text-[#2DC071]">5 Items</p>
          <p className="text-3xl ">FURNITURE</p>
          <p>Read More</p>
        </div>
        <Image
          src="/assets/images/media-bg-cover(1).png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[350px] mx-auto w-[300px] md:w-full md:h-full relative md:col-start-4 md:col-end-6 md:row-start-2 md:row-end-2">
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10 flex flex-col p-7 md:p-8 font-bold text-lg gap-y-3">
          <p className="text-[#2DC071]">5 Items</p>
          <p className="text-3xl ">FURNITURE</p>
          <p>Read More</p>
        </div>
        <Image
          src="/assets/images/media-bg-cover(2).png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[350px] mx-auto w-[300px] md:w-full md:h-full relative md:col-start-6 md:col-end-8 md:row-start-2 md:row-end-2">
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10 flex flex-col p-7 md:p-8 font-bold text-lg gap-y-3">
          <p className="text-[#2DC071]">5 Items</p>
          <p className="text-3xl ">FURNITURE</p>
          <p>Read More</p>
        </div>
        <Image
          src="/assets/images/media-bg-cover(3).png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Banner;
