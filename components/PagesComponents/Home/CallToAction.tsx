import Image from "next/legacy/image";

const CallToAction = () => {
  return (
    <div className="w-full mt-8">
      <div className="h-[400px] min-w-full w-full relative">
        <div className="absolute inset-0 bg-black bg-opacity-15 z-10 text-center items-center flex my-auto">
          <div className="h-fit w-full font-semibold gap-y-4 flex flex-col">
            <p className="text-blue-400 text-sm">Designing Better Experience</p>
            <p className="text-2xl md:text-3xl">
              Problems trying to resolve <br />
              the conflict between
            </p>
            <p className="font-medium text-xs md:text-sm px-3">
              Problems trying to resolve the conflict between the two major realms of Classical
              physics:
            </p>
            <p className="text-green-700 font-bold">$16.48</p>
            <button className="w-fit mx-auto px-10 py-3 text-neutral-50 bg-[#23A6F0] rounded-md">
              ADD YOUR CALL TO ACTION
            </button>
          </div>
        </div>
        <Image
          src="/assets/images/big-screen-call-to-action.png"
          alt="kitchen utensil"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default CallToAction;
