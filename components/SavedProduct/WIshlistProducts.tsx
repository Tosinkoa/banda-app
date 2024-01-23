import Image from "next/legacy/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

const WIshlistProducts: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mx-auto gap-3 ">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col w-fit place-content-center justify-self-center gap-y-3"
          >
            <div className="relative h-[150px] w-[120px]">
              <Image
                src="/assets/images/media-bg-cover.png"
                alt="product image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="font-semibold w-full text-center space-y-1 text-sm">
              <p>Graphic Design</p>
              <p className="font-bold">
                <span className="text-neutral-400">$16.40</span>{" "}
                <span className="text-[#23856D]">$6.48</span>
              </p>
              <button className="md:text-base text-xs border flex place-content-center gap-x-1 py-1.5 rounded-md items-center font-semibold w-full mx-auto text-[#23A6F0] border-[#23A6F0]">
                <LiaTimesSolid className="text-lg" />
                <span className="text-sm">Remove</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WIshlistProducts;
