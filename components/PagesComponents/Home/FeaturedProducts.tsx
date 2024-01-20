import Image from "next/legacy/image";

const FeaturedProducts: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-8">
      <div className="flex flex-col text-center gap-y-1 text-base md:text-lg w-full mx-auto">
        <p className="font-semibold text-neutral-400">Featured Products</p>
        <h3 className="font-bold text-lg md:text-xl">BEST SELLER PRODUCTS</h3>
        <p className=" text-neutral-400 text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col place-content-center justify-self-center gap-y-3"
            >
              <div className="relative h-[280px] w-[200px]">
                <Image
                  src="/assets/images/media-bg-cover.png"
                  alt="product image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="font-semibold w-full text-center space-y-1">
                <p>Graphic Design</p>
                <p className="text-neutral-500">English Department</p>
                <p className="font-bold">
                  <span className="text-neutral-400">$16.40</span>{" "}
                  <span className="text-[#23856D]">$6.48</span>
                </p>
              </div>
            </div>
          ))}
      </div>
      <button className="md:text-base text-xs border rounded-md font-semibold w-64 mx-auto py-3 text-[#23A6F0] border-[#23A6F0]">
        LOAD MORE PRODUCTS
        {/* LOADING PRODUCT.... */}
      </button>
    </div>
  );
};

export default FeaturedProducts;
